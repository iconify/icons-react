import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt96rf38k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt96rf38k"/>`,
		"fallback": "entypo:cake",
	});
}

export default Component;
