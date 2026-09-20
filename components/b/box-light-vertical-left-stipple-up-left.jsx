import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-h6xzd9o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-h6xzd9o"/>`,
		"fallback": "memory:box-light-vertical-left-stipple-up-left",
	});
}

export default Component;
