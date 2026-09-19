import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1afvzb4b.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1afvzb4b"/>`,
		"fallback": "il:brightness",
	});
}

export default Component;
