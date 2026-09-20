import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqvar9byn.css';

const viewBox = {"width":1280,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqvar9byn"/>`,
		"fallback": "thesvg-color:base",
	});
}

export default Component;
