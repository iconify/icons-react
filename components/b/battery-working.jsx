import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0biy3-1k.css';
import '../../css/z/z9thu7bwc.css';
import '../../css/c/ccn922z7i.css';
import '../../css/u/uk7m8-rvq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0biy3-1k"/><path class="z9thu7bwc"/><path class="ccn922z7i"/><path class="uk7m8-rvq"/></g>`,
		"fallback": "icon-park:battery-working",
	});
}

export default Component;
