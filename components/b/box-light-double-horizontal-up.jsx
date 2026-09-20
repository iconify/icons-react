import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwi067x_n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwi067x_n"/>`,
		"fallback": "memory:box-light-double-horizontal-up",
	});
}

export default Component;
