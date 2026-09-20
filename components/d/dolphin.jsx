import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf5iuab3o.css';
import '../../css/d/dsyvlke6y.css';
import '../../css/d/dex-3wjmd.css';
import '../../css/s/sfa-hybnb.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/f3iy1rb4q.css';
import '../../css/k/kpnydupda.css';
import '../../css/t/tq8ljsbnz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf5iuab3o"/><path class="dsyvlke6y"/><path class="dex-3wjmd"/><path class="sfa-hybnb"/><g class="ij2x_72vy"><path class="f3iy1rb4q"/><path class="kpnydupda"/><path class="tq8ljsbnz"/></g>`,
		"fallback": "openmoji:dolphin",
	});
}

export default Component;
