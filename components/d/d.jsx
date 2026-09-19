import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du_u15bqp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du_u15bqp"/>`,
		"fallback": "fa7-solid:d",
	});
}

export default Component;
