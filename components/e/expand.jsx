import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajev8gbcb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajev8gbcb"/>`,
		"fallback": "ooui:expand",
	});
}

export default Component;
