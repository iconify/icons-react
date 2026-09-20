import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd1cm_bts.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd1cm_bts"/>`,
		"fallback": "memory:door",
	});
}

export default Component;
