import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvia1dq0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvia1dq0v"/>`,
		"fallback": "iconaut:coffee-solid",
	});
}

export default Component;
