import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faofj7wie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faofj7wie"/>`,
		"fallback": "thesvg:fritz",
	});
}

export default Component;
