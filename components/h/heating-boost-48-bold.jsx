import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icg_7_b4w.css';
import '../../css/y/y7lbhg29g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icg_7_b4w"/><path class="y7lbhg29g"/>`,
		"fallback": "energy-icons:heating-boost-48-bold",
	});
}

export default Component;
