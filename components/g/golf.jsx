import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvai0mk5q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvai0mk5q"/>`,
		"fallback": "picon:golf",
	});
}

export default Component;
