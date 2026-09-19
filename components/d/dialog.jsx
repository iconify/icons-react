import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojjz05b6v.css';

const viewBox = {"width":750,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojjz05b6v"/>`,
		"fallback": "il:dialog",
	});
}

export default Component;
