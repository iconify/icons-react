import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2jiffbsi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2jiffbsi"/>`,
		"fallback": "fa7-solid:bottle-droplet",
	});
}

export default Component;
