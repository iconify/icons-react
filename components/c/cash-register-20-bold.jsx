import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmfthdbsp.css';
import '../../css/w/w1s0n4bzt.css';
import '../../css/v/vij3r-vuu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmfthdbsp"/><path class="w1s0n4bzt"/><path class="vij3r-vuu"/>`,
		"fallback": "energy-icons:cash-register-20-bold",
	});
}

export default Component;
