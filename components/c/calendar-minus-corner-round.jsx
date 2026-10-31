import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug7e57byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug7e57byd"/>`,
		"fallback": "coolicons:calendar-minus-corner-round",
	});
}

export default Component;
