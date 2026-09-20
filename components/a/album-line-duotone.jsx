import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnsop5_4w.css';
import '../../css/e/ea_31gbnm.css';
import '../../css/o/o7cgxubkk.css';
import '../../css/d/dtjl_kbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vnsop5_4w"/><path class="ea_31gbnm"/><circle class="o7cgxubkk"/><path class="dtjl_kbzo"/></g>`,
		"fallback": "solar:album-line-duotone",
	});
}

export default Component;
