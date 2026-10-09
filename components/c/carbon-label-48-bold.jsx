import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8v4i5bxl.css';
import '../../css/x/xd4ug9z_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8v4i5bxl"/><path class="xd4ug9z_q"/>`,
		"fallback": "energy-icons:carbon-label-48-bold",
	});
}

export default Component;
