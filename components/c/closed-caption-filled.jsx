import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi3uv14or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oi3uv14or"/>`,
		"fallback": "lucide-extended:closed-caption-filled",
	});
}

export default Component;
