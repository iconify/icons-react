import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iepueqoam.css';
import '../../css/j/jdzoki6fy.css';
import '../../css/a/a58f3knfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iepueqoam"/><path class="jdzoki6fy"/><path class="a58f3knfd"/></g>`,
		"fallback": "solar:dialog-line-duotone",
	});
}

export default Component;
