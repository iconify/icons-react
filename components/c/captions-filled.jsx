import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajg2szb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ajg2szb5t"/>`,
		"fallback": "lucide-extended:captions-filled",
	});
}

export default Component;
