import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx1qx3tfc.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx1qx3tfc"/>`,
		"fallback": "memory:alpha-p",
	});
}

export default Component;
