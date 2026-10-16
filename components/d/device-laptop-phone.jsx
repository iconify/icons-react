import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmvj_6bsu.css';
import '../../css/x/xmb5_qbsa.css';
import '../../css/o/o_6x-abbh.css';
import '../../css/z/zsae5lb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vmvj_6bsu"/><path class="xmb5_qbsa"/><rect transform="rotate(-90 15.5 20.35)" class="o_6x-abbh"/><path class="zsae5lb-y"/></g>`,
		"fallback": "andrsrxn:device-laptop-phone",
	});
}

export default Component;
