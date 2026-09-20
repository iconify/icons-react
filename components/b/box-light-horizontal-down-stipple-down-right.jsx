import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7ou676du.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7ou676du"/>`,
		"fallback": "memory:box-light-horizontal-down-stipple-down-right",
	});
}

export default Component;
