import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wj6jz1bvj.css';
import '../../css/g/gjsoiglnp.css';
import '../../css/d/dx1-deb1v.css';
import '../../css/t/t-f8h2bkr.css';
import '../../css/t/tuypzzv4h.css';
import '../../css/w/w1l5fo2gl.css';
import '../../css/c/ccn1f9bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wj6jz1bvj wm-k"/><path class="gjsoiglnp wm-a"/><path class="dx1-deb1v wm-k"/><path class="t-f8h2bkr wm-a"/><path class="tuypzzv4h wm-k"/><path class="w1l5fo2gl wm-k"/><path class="ccn1f9bob wm-s"/></g>`,
		"fallback": "withicons:award-sketch",
	});
}

export default Component;
