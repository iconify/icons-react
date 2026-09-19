import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdq6guqpt.css';
import '../../css/m/ma8xebchi.css';
import '../../css/j/jops46icm.css';
import '../../css/s/soxgggbzu.css';
import '../../css/n/n2-6f21cu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdq6guqpt"/><path class="ma8xebchi"/><path class="jops46icm"/><path class="soxgggbzu"/><path class="n2-6f21cu"/>`,
		"fallback": "devicon:dyalog",
	});
}

export default Component;
