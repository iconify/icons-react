import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umao54bsp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umao54bsp"/>`,
		"fallback": "carbon:direction-straight-right",
	});
}

export default Component;
