import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feg7vxbtl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feg7vxbtl"/>`,
		"fallback": "fa7-solid:chess-knight",
	});
}

export default Component;
