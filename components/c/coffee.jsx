import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqd9fbcab.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqd9fbcab"/>`,
		"fallback": "memory:coffee",
	});
}

export default Component;
