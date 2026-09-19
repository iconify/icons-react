import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucyzwbb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucyzwbb8q"/>`,
		"fallback": "griddy-icons:discord",
	});
}

export default Component;
