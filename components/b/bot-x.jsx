import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn4b-obfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn4b-obfy"/>`,
		"fallback": "noviair-light:bot-x",
	});
}

export default Component;
