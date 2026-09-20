import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jds-7weev.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jds-7weev"/>`,
		"fallback": "memory:hexagon",
	});
}

export default Component;
