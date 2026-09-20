import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gee286b3l.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gee286b3l"/>`,
		"fallback": "memory:box-light-round-up-left-stipple",
	});
}

export default Component;
