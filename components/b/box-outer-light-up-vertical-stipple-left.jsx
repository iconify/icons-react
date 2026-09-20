import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rem292bvp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rem292bvp"/>`,
		"fallback": "memory:box-outer-light-up-vertical-stipple-left",
	});
}

export default Component;
