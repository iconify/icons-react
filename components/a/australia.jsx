import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyw3y3bnf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyw3y3bnf"/>`,
		"fallback": "picon:australia",
	});
}

export default Component;
