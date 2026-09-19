import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tze1n8bro.css';

const viewBox = {"width":1024,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tze1n8bro"/>`,
		"fallback": "whh:flickrthree",
	});
}

export default Component;
