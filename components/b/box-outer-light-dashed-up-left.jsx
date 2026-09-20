import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy616z8bl.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy616z8bl"/>`,
		"fallback": "memory:box-outer-light-dashed-up-left",
	});
}

export default Component;
