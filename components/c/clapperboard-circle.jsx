import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lt4_7tbfr.css';
import '../../css/f/fe-32tbfb.css';
import '../../css/k/kyt4j6b-c.css';
import '../../css/s/ssw-3aboo.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lt4_7tbfr"/><path class="fe-32tbfb"/><path class="kyt4j6b-c"/><path class="ssw-3aboo"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:clapperboard-circle",
	});
}

export default Component;
