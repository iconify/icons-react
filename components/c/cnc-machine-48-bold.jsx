import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzpmmxj6m.css';
import '../../css/e/ez71_mloi.css';
import '../../css/h/hc5gysb_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzpmmxj6m"/><path class="ez71_mloi"/><path class="hc5gysb_r"/>`,
		"fallback": "energy-icons:cnc-machine-48-bold",
	});
}

export default Component;
