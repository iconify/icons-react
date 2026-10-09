import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em933ob1r.css';
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
		"content": `<path class="em933ob1r"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`,
		"fallback": "energy-icons:bolt-plus-48",
	});
}

export default Component;
