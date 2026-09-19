import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onc2e3brb.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onc2e3brb"/>`,
		"fallback": "whh:android",
	});
}

export default Component;
