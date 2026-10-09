import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0140xb6z.css';
import '../../css/v/v-c6wh_lx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0140xb6z"/><path class="v-c6wh_lx"/>`,
		"fallback": "energy-icons:corner-down-right-48",
	});
}

export default Component;
