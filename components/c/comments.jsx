import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgeh2rblg.css';

const viewBox = {"width":768,"height":634};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgeh2rblg"/>`,
		"fallback": "ls:comments",
	});
}

export default Component;
