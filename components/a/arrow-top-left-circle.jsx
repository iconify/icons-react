import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjh-vvbue.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjh-vvbue"/>`,
		"fallback": "memory:arrow-top-left-circle",
	});
}

export default Component;
