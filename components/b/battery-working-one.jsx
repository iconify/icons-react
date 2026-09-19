import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzwrbd3pc.css';
import '../../css/z/z9thu7bwc.css';
import '../../css/c/ccn922z7i.css';
import '../../css/u/uk7m8-rvq.css';
import '../../css/y/y5lp41bgr.css';
import '../../css/o/ouh0295wr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rzwrbd3pc"/><path class="z9thu7bwc"/><path class="ccn922z7i"/><path class="uk7m8-rvq"/><path class="y5lp41bgr"/><path class="ouh0295wr"/></g>`,
		"fallback": "icon-park:battery-working-one",
	});
}

export default Component;
