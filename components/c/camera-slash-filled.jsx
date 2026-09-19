import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/innh25fao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="innh25fao"/>`,
		"fallback": "boxicons:camera-slash-filled",
	});
}

export default Component;
