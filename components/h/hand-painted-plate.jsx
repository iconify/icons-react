import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbr7_vb5d.css';
import '../../css/l/lqfofwfty.css';
import '../../css/m/m2bi15b-s.css';
import '../../css/i/ii67q_bfr.css';
import '../../css/k/kfod8ac1j.css';
import '../../css/g/gqcffo6_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nbr7_vb5d"/><path class="lqfofwfty"/><path class="m2bi15b-s"/><path class="ii67q_bfr"/><rect class="kfod8ac1j"/><rect class="gqcffo6_p"/></g>`,
		"fallback": "icon-park:hand-painted-plate",
	});
}

export default Component;
