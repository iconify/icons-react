import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es3w6ybnc.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es3w6ybnc"/>`,
		"fallback": "memory:box-light-vertical-menu-down",
	});
}

export default Component;
