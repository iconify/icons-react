import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmh5xkboo.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmh5xkboo"/>`,
		"fallback": "memory:box-outer-light-left-horizontal-stipple",
	});
}

export default Component;
