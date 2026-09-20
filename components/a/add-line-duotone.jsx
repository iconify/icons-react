import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hw_sn9wmj.css';
import '../../css/t/tvnjwleuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hw_sn9wmj"/><path class="tvnjwleuy"/></g>`,
		"fallback": "solar:add-line-duotone",
	});
}

export default Component;
