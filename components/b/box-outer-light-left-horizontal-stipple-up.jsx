import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt4qfkute.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt4qfkute"/>`,
		"fallback": "memory:box-outer-light-left-horizontal-stipple-up",
	});
}

export default Component;
