import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae1tb3ble.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae1tb3ble"/>`,
		"fallback": "memory:arrow-right",
	});
}

export default Component;
