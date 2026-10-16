import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2iln_b1i.css';
import '../../css/k/kg_87_b2n.css';
import '../../css/t/t0gjp2bhf.css';
import '../../css/e/ekfibsbsg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2iln_b1i"/><path class="kg_87_b2n"/><path class="t0gjp2bhf"/><path class="ekfibsbsg"/>`,
		"fallback": "energy-icons:airborne-wind-20",
	});
}

export default Component;
