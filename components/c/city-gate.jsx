import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/q/qw16ezbde.css';
import '../../css/o/os1u2gbos.css';
import '../../css/t/tgdkxvabg.css';
import '../../css/d/dsvvolbvq.css';
import '../../css/p/p21qu8bmv.css';
import '../../css/s/sfi2orgwm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="qw16ezbde"/><path class="os1u2gbos"/><path class="tgdkxvabg"/><path class="dsvvolbvq"/><path class="p21qu8bmv"/><path class="sfi2orgwm"/></g>`,
		"fallback": "icon-park:city-gate",
	});
}

export default Component;
