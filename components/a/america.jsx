import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upo8e8zvr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upo8e8zvr"/>`,
		"fallback": "picon:america",
	});
}

export default Component;
