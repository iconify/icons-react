import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxown8zph.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxown8zph"/>`,
		"fallback": "simple-line-icons:frame",
	});
}

export default Component;
