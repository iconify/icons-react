import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wee52ogfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wee52ogfz"/>`,
		"fallback": "pixelarticons:drag-and-drop-solid",
	});
}

export default Component;
