import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nigx2wbdb.css';
import '../../css/h/htjepabmz.css';
import '../../css/q/qtkdtxbkm.css';
import '../../css/d/dy1y8yfii.css';
import '../../css/w/wf2inib9f.css';
import '../../css/w/w__zrd_ab.css';
import '../../css/k/kf2xfzb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="nigx2wbdb"/><path class="htjepabmz"/><path class="qtkdtxbkm"/><rect class="dy1y8yfii"/><rect class="wf2inib9f"/><rect class="w__zrd_ab"/><rect class="kf2xfzb-i"/></g>`,
		"fallback": "lets-icons:date-range-light",
	});
}

export default Component;
