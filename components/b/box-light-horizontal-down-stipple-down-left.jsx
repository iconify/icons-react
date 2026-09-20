import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zysb-3tfj.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zysb-3tfj"/>`,
		"fallback": "memory:box-light-horizontal-down-stipple-down-left",
	});
}

export default Component;
