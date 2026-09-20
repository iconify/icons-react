import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg2yryvfm.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg2yryvfm"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-up",
	});
}

export default Component;
