import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td2eli6nu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td2eli6nu"/>`,
		"fallback": "entypo:forward",
	});
}

export default Component;
