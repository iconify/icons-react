import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yki9d0bvr.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yki9d0bvr"/>`,
		"fallback": "memory:box-outer-light-dashed-up-left-right",
	});
}

export default Component;
