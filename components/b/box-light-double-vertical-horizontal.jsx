import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syqzq4b_v.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syqzq4b_v"/>`,
		"fallback": "memory:box-light-double-vertical-horizontal",
	});
}

export default Component;
