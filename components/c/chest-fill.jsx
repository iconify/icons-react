import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk1t647en.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk1t647en"/>`,
		"fallback": "memory:chest-fill",
	});
}

export default Component;
