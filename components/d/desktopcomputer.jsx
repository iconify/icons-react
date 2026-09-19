import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siwlywbjp.css';
import '../../css/q/qovlwybgz.css';
import '../../css/h/hbp7x-bbl.css';
import '../../css/q/q6xf189ew.css';
import '../../css/p/psu60ebnb.css';
import '../../css/k/k5x3_rr-p.css';
import '../../css/g/giobxlb6s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siwlywbjp"/><path class="qovlwybgz"/><path class="hbp7x-bbl"/><path class="q6xf189ew"/><path class="psu60ebnb"/><path class="k5x3_rr-p"/><path class="giobxlb6s"/>`,
		"fallback": "fxemoji:desktopcomputer",
	});
}

export default Component;
