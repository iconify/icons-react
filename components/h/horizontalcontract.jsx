import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7alt82_f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7alt82_f"/>`,
		"fallback": "whh:horizontalcontract",
	});
}

export default Component;
