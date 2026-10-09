import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k849iebqp.css';
import '../../css/c/cham1t_la.css';
import '../../css/e/ey5fq-bns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k849iebqp"/><path class="cham1t_la"/><path class="ey5fq-bns"/>`,
		"fallback": "energy-icons:chart-pie-half-20-bold",
	});
}

export default Component;
