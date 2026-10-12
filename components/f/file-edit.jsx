import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g47o54kzt.css';
import '../../css/q/q5hoiboxc.css';
import '../../css/m/m2n_gm4_v.css';
import '../../css/s/shwczoibt.css';
import '../../css/y/yff4kwmaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g47o54kzt"/><path class="q5hoiboxc"/><path class="m2n_gm4_v"/><rect transform="rotate(135 6.603 13.18)scale(-1 1)" class="shwczoibt"/><path class="yff4kwmaf"/></g>`,
		"fallback": "andrsrxn:file-edit",
	});
}

export default Component;
