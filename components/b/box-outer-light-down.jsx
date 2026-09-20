import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrcvkqd7n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrcvkqd7n"/>`,
		"fallback": "memory:box-outer-light-down",
	});
}

export default Component;
