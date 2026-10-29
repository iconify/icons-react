import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/soxy3ccjt.css';
import '../../css/f/f_g-ti_oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="soxy3ccjt"/><path class="f_g-ti_oa wm-a"/></g>`,
		"fallback": "withicons:gallery-horizontal-solid",
	});
}

export default Component;
