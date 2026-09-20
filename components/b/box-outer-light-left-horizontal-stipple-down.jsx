import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg-0uvb6x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg-0uvb6x"/>`,
		"fallback": "memory:box-outer-light-left-horizontal-stipple-down",
	});
}

export default Component;
