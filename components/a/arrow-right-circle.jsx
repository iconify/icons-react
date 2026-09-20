import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pao8l1btu.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pao8l1btu"/>`,
		"fallback": "memory:arrow-right-circle",
	});
}

export default Component;
