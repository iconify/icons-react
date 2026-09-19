import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6dg5j3rg.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6dg5j3rg"/>`,
		"fallback": "whh:glass",
	});
}

export default Component;
