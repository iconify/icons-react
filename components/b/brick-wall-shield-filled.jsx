import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4a0pfb5b.css';
import '../../css/y/y_elplb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4a0pfb5b"/><path clip-rule="evenodd" class="y_elplb8u"/>`,
		"fallback": "lucide-extended:brick-wall-shield-filled",
	});
}

export default Component;
