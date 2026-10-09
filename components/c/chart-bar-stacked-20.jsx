import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pycxazbfr.css';
import '../../css/y/ys4d30teh.css';
import '../../css/h/hc-kyoehs.css';
import '../../css/x/x88p2xa8i.css';
import '../../css/t/tkj5hkb6r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pycxazbfr"/><path class="ys4d30teh"/><path class="hc-kyoehs"/><path class="x88p2xa8i"/><path class="tkj5hkb6r"/>`,
		"fallback": "energy-icons:chart-bar-stacked-20",
	});
}

export default Component;
