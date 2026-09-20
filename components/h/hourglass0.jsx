import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9orm0blr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9orm0blr"/>`,
		"fallback": "picon:hourglass0",
	});
}

export default Component;
