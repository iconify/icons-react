import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stq9o589s.css';
import '../../css/u/uba7_m4oz.css';
import '../../css/p/pu0dxsbmz.css';
import '../../css/v/v96_hlbuv.css';
import '../../css/d/d31kuca8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stq9o589s wm-k"/><path class="uba7_m4oz wm-k"/><path class="pu0dxsbmz wm-k"/><path class="v96_hlbuv wm-shine"/><path class="d31kuca8l wm-a"/></g>`,
		"fallback": "withicons-anime:alert-triangle",
	});
}

export default Component;
