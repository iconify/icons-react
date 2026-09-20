import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op4vh8z_c.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op4vh8z_c"/>`,
		"fallback": "memory:alpha-o-fill",
	});
}

export default Component;
