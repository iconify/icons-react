import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhfqrokgp.css';
import '../../css/k/k-gicyhal.css';
import '../../css/c/cbu4rlgab.css';
import '../../css/o/ob5gslbbn.css';
import '../../css/g/g1f57lbke.css';
import '../../css/z/zsn9c1b_j.css';
import '../../css/h/het9pgbke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhfqrokgp"/><path class="k-gicyhal"/><g class="cbu4rlgab"><circle class="ob5gslbbn"/><circle class="g1f57lbke"/></g><path class="zsn9c1b_j"/><path class="het9pgbke"/>`,
		"fallback": "flat-color-icons:calendar",
	});
}

export default Component;
