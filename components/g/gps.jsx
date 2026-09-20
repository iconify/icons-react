import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aam2fvvmq.css';
import '../../css/r/rro4m3eny.css';
import '../../css/s/s-ujgf9tk.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/r050nobfo.css';
import '../../css/c/cirnjda0e.css';
import '../../css/u/u7zm16btu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="aam2fvvmq"><path class="rro4m3eny"/><path class="s-ujgf9tk"/></g><g class="ij2x_72vy"><path class="r050nobfo"/><circle class="cirnjda0e"/><path class="u7zm16btu"/></g>`,
		"fallback": "openmoji:gps",
	});
}

export default Component;
