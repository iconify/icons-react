import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7zl_d3jf.css';
import '../../css/p/p7-m9i8me.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7zl_d3jf"/><path class="p7-m9i8me"/>`,
		"fallback": "energy-icons:and-gate-48-bold",
	});
}

export default Component;
