import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5t3am54q.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5t3am54q"/>`,
		"fallback": "memory:arrow-left-bold",
	});
}

export default Component;
