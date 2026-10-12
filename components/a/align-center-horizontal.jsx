import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otiayh33r.css';
import '../../css/w/wt_5s3s9y.css';
import '../../css/m/mkw3e3bgk.css';
import '../../css/y/y1a63-bcp.css';
import '../../css/z/z1_i52sma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="otiayh33r"/><rect class="wt_5s3s9y"/><rect class="mkw3e3bgk"/><rect class="y1a63-bcp"/><path class="z1_i52sma"/></g>`,
		"fallback": "andrsrxn:align-center-horizontal",
	});
}

export default Component;
