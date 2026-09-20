import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpmof_b-o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpmof_b-o"/>`,
		"fallback": "memory:box-outer-light-down-right",
	});
}

export default Component;
