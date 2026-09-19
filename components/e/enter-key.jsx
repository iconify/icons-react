import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jywzibzfz.css';
import '../../css/f/fw8rx6b9c.css';
import '../../css/c/cuh8gyztp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jywzibzfz"/><path class="fw8rx6b9c"/><path class="cuh8gyztp"/></g>`,
		"fallback": "icon-park-outline:enter-key",
	});
}

export default Component;
