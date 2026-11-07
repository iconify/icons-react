import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mr7muf4pj.css';
import '../../css/v/v7ab_1i9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mr7muf4pj"/><path class="v7ab_1i9x"/></g>`,
		"fallback": "solar:add-line-duotone",
	});
}

export default Component;
