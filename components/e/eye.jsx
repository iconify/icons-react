import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dplbjkryd.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dplbjkryd"/>`,
		"fallback": "memory:eye",
	});
}

export default Component;
