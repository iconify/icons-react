import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evsd6q7sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evsd6q7sj"/>`,
		"fallback": "simple-icons:googledatastudio",
	});
}

export default Component;
