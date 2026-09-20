import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/l/l_i85_b9g.css';
import '../../css/s/sqf-mpz1p.css';
import '../../css/m/mzn226cms.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="l_i85_b9g"/><path clip-rule="evenodd" class="sqf-mpz1p"/><path clip-rule="evenodd" class="mzn226cms"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:credit-card-circle",
	});
}

export default Component;
