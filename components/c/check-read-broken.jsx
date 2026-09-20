import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wqhegdbuk.css';
import '../../css/d/dwziarbem.css';
import '../../css/j/jguj386_i.css';
import '../../css/s/sb3s0p75l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wqhegdbuk"/><path class="dwziarbem"/><path class="jguj386_i"/><path class="sb3s0p75l"/></g>`,
		"fallback": "solar:check-read-broken",
	});
}

export default Component;
