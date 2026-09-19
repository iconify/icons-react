import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohbpjk02c.css';

const viewBox = {"width":630,"height":700};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohbpjk02c"/>`,
		"fallback": "il:arrow-down",
	});
}

export default Component;
