import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_d4iy4kd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_d4iy4kd"/>`,
		"fallback": "healthicons:euro",
	});
}

export default Component;
