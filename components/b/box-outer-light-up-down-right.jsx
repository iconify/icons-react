import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtph6ub4q.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtph6ub4q"/>`,
		"fallback": "memory:box-outer-light-up-down-right",
	});
}

export default Component;
