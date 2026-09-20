import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn8bvackf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn8bvackf"/>`,
		"fallback": "memory:chevron-left-circle",
	});
}

export default Component;
