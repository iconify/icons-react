import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxy8lcb5z.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxy8lcb5z"/>`,
		"fallback": "memory:box-light-double-vertical-light-right",
	});
}

export default Component;
