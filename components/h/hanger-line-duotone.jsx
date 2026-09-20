import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pwjteabwz.css';
import '../../css/k/kx6pwrbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pwjteabwz"/><path class="kx6pwrbnp"/></g>`,
		"fallback": "solar:hanger-line-duotone",
	});
}

export default Component;
