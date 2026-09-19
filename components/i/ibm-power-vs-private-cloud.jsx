import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxcxmdq5i.css';
import '../../css/i/ij8y94egb.css';
import '../../css/v/vh1dgbcue.css';
import '../../css/m/m1y4hsbgq.css';
import '../../css/l/l3v-u6t6g.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/d/d7xw_evhl.css';
import '../../css/u/uh68tk4rv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxcxmdq5i"/><path class="ij8y94egb"/><circle class="vh1dgbcue"/><circle class="m1y4hsbgq"/><circle class="l3v-u6t6g"/><circle class="e39ud6bwf"/><path class="d7xw_evhl"/><path class="uh68tk4rv"/>`,
		"fallback": "carbon:ibm-power-vs-private-cloud",
	});
}

export default Component;
