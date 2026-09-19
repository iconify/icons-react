import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyk3zk00o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyk3zk00o"/>`,
		"fallback": "cryptocurrency:ape",
	});
}

export default Component;
