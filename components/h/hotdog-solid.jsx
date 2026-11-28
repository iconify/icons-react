import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o76mt6y5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o76mt6y5q"/>`,
		"fallback": "iconaut:hotdog-solid",
	});
}

export default Component;
