import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st72lkbvf.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st72lkbvf"/>`,
		"fallback": "memory:box-light-horizontal-up-stipple-up-right",
	});
}

export default Component;
