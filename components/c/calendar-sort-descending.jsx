import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd9g1nd4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd9g1nd4k"/>`,
		"fallback": "pixelarticons:calendar-sort-descending",
	});
}

export default Component;
