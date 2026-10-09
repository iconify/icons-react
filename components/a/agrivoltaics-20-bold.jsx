import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neuw9obnw.css';
import '../../css/u/ub392o4dq.css';
import '../../css/s/sv88clbwm.css';
import '../../css/k/k8n_s9mjg.css';
import '../../css/n/nbk9hfwrf.css';
import '../../css/s/szzkdgp0p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neuw9obnw"/><path class="ub392o4dq"/><path class="sv88clbwm"/><path class="k8n_s9mjg"/><path class="nbk9hfwrf"/><path class="szzkdgp0p"/>`,
		"fallback": "energy-icons:agrivoltaics-20-bold",
	});
}

export default Component;
