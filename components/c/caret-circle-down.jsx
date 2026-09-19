import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc1-cb1mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc1-cb1mf"/>`,
		"fallback": "ci:caret-circle-down",
	});
}

export default Component;
