import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be780fp0z.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be780fp0z"/>`,
		"fallback": "ps:coins",
	});
}

export default Component;
