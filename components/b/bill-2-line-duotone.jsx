import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pvep1hbek.css';
import '../../css/y/yony_l-xz.css';
import '../../css/o/ok10udbbc.css';
import '../../css/v/vhlnnlb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pvep1hbek"/><path class="yony_l-xz"/><path class="ok10udbbc"/><path class="vhlnnlb3x"/></g>`,
		"fallback": "solar:bill-2-line-duotone",
	});
}

export default Component;
