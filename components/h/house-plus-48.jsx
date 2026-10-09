import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqmwze80o.css';
import '../../css/e/e3mo12bkj.css';
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
		"content": `<path class="cqmwze80o"/><path class="e3mo12bkj"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`,
		"fallback": "energy-icons:house-plus-48",
	});
}

export default Component;
