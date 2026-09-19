import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0rokl91k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0rokl91k"/>`,
		"fallback": "entypo:info",
	});
}

export default Component;
