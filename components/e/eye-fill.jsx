import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/holrsn7wm.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="holrsn7wm"/>`,
		"fallback": "memory:eye-fill",
	});
}

export default Component;
