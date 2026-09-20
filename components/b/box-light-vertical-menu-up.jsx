import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4p19wb-d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4p19wb-d"/>`,
		"fallback": "memory:box-light-vertical-menu-up",
	});
}

export default Component;
