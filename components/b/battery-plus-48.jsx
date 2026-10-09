import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri3k7ob7e.css';
import '../../css/a/a-4s07bqr.css';
import '../../css/v/v-3r9t8cb.css';
import '../../css/c/cal94qbrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri3k7ob7e"/><path class="a-4s07bqr"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`,
		"fallback": "energy-icons:battery-plus-48",
	});
}

export default Component;
