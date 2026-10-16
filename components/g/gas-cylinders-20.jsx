import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pycxazbfr.css';
import '../../css/i/i5mya4brk.css';
import '../../css/m/mi7_fubeb.css';
import '../../css/g/gr6o8envi.css';
import '../../css/a/aj0ockjbd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pycxazbfr"/><path class="i5mya4brk"/><path class="mi7_fubeb"/><path class="gr6o8envi"/><path class="aj0ockjbd"/>`,
		"fallback": "energy-icons:gas-cylinders-20",
	});
}

export default Component;
