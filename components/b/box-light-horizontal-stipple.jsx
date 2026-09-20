import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyzho8blt.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyzho8blt"/>`,
		"fallback": "memory:box-light-horizontal-stipple",
	});
}

export default Component;
