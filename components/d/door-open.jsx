import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7a0dzb4l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7a0dzb4l"/>`,
		"fallback": "memory:door-open",
	});
}

export default Component;
