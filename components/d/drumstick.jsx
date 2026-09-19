import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-iocbbhb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-iocbbhb"/>`,
		"fallback": "dashicons:drumstick",
	});
}

export default Component;
