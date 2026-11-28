import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykkm75j5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykkm75j5q"/>`,
		"fallback": "noviair:caret-right",
	});
}

export default Component;
