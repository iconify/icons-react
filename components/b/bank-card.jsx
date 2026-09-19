import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6p9v1bil.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6p9v1bil"/>`,
		"fallback": "icons8:bank-card",
	});
}

export default Component;
