import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7b-ivwtn.css';
import '../../css/c/cn0ji2cwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7b-ivwtn"/><path class="cn0ji2cwt"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-module",
	});
}

export default Component;
