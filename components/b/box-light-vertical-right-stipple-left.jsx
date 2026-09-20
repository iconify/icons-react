import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv2lx-mpg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv2lx-mpg"/>`,
		"fallback": "memory:box-light-vertical-right-stipple-left",
	});
}

export default Component;
