import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0gxl0bkz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0gxl0bkz"/>`,
		"fallback": "energy-icons:align-right-48",
	});
}

export default Component;
