import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a_cg1tblq.css';
import '../../css/z/z0b3g102j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a_cg1tblq"/><path class="wm-a z0b3g102j"/></g>`,
		"fallback": "withicons:drill-solid",
	});
}

export default Component;
