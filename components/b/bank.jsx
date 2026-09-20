import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jonzy7b1y.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jonzy7b1y"/>`,
		"fallback": "memory:bank",
	});
}

export default Component;
