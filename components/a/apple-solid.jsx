import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoel_3brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoel_3brr"/>`,
		"fallback": "pixelarticons:apple-solid",
	});
}

export default Component;
