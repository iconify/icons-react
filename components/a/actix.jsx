import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxr8a6byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxr8a6byb"/>`,
		"fallback": "thesvg-color:actix",
	});
}

export default Component;
