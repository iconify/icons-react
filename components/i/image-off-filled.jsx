import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu95p048q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zu95p048q"/>`,
		"fallback": "griddy-icons:image-off-filled",
	});
}

export default Component;
