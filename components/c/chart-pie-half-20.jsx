import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1q-oibwe.css';
import '../../css/c/cp_m0ih6c.css';
import '../../css/q/qzsda2yxj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1q-oibwe"/><path class="cp_m0ih6c"/><path class="qzsda2yxj"/>`,
		"fallback": "energy-icons:chart-pie-half-20",
	});
}

export default Component;
