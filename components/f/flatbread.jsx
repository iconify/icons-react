import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/n/nmdvjebhi.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/a/ayh_-joxv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="nmdvjebhi"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="ayh_-joxv"/></g>`,
		"fallback": "openmoji:flatbread",
	});
}

export default Component;
