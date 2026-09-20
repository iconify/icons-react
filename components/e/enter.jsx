import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-ldc2pzb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-ldc2pzb"/>`,
		"fallback": "uiw:enter",
	});
}

export default Component;
