import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m5b33_bpj.css';
import '../../css/a/a6jo9qb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m5b33_bpj"/><path class="a6jo9qb1m"/></g>`,
		"fallback": "solar:home-add-angle-line-duotone",
	});
}

export default Component;
