import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxix1zkta.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxix1zkta"/>`,
		"fallback": "memory:box-light-round-up-right-stipple-inner",
	});
}

export default Component;
