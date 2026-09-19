import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/m/muvtlrodu.css';
import '../../css/d/d03q2nt3l.css';
import '../../css/z/zvtazzblk.css';
import '../../css/t/tu-lmhbyv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="muvtlrodu"/><circle class="d03q2nt3l"/><path class="zvtazzblk"/><path class="tu-lmhbyv"/></g>`,
		"fallback": "icon-park:doughnut",
	});
}

export default Component;
