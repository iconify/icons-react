import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnhwlnb6n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnhwlnb6n"/>`,
		"fallback": "memory:box-outer-light-left-right",
	});
}

export default Component;
