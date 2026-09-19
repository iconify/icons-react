import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3y1o4bjb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3y1o4bjb"/>`,
		"fallback": "entypo:awareness-ribbon",
	});
}

export default Component;
