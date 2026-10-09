import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ragurnetf.css';
import '../../css/p/pwh5jrbca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ragurnetf"/><path class="pwh5jrbca"/>`,
		"fallback": "energy-icons:coins-48-bold",
	});
}

export default Component;
