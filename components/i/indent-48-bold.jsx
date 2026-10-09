import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8uvxb0e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj8uvxb0e"/>`,
		"fallback": "energy-icons:indent-48-bold",
	});
}

export default Component;
