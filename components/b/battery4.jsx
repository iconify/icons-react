import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceecv5bzb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceecv5bzb"/>`,
		"fallback": "picon:battery4",
	});
}

export default Component;
