import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyzm_vboa.css';
import '../../css/i/ikj4-qogc.css';
import '../../css/m/m_aatt6fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyzm_vboa"/><path class="ikj4-qogc"/><path class="m_aatt6fu"/></g>`,
		"fallback": "andrsrxn:file-minus",
	});
}

export default Component;
