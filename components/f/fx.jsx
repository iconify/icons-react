import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt10cwbuy.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt10cwbuy"/>`,
		"fallback": "whh:fx",
	});
}

export default Component;
