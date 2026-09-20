import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8-xambrv.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8-xambrv"/>`,
		"fallback": "memory:box-outer-light-right-horizontal-stipple-down",
	});
}

export default Component;
