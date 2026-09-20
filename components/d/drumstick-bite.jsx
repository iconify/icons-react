import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soau7yb7t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soau7yb7t"/>`,
		"fallback": "la:drumstick-bite",
	});
}

export default Component;
