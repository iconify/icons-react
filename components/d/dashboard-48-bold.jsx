import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw_1otbkh.css';
import '../../css/e/ed7w77b1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw_1otbkh"/><path class="ed7w77b1c"/>`,
		"fallback": "energy-icons:dashboard-48-bold",
	});
}

export default Component;
