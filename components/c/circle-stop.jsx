import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/t/tz6dlvj8m.css';
import '../../css/j/juknfg1_q.css';
import '../../css/m/m3v65sy6i.css';
import '../../css/c/cmyf16awz.css';
import '../../css/k/k8bo0pb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="tz6dlvj8m"/><path class="juknfg1_q"/><path class="m3v65sy6i"/><path class="cmyf16awz"/><path class="k8bo0pb0n"/></g>`,
		"fallback": "withicons-retro:circle-stop",
	});
}

export default Component;
