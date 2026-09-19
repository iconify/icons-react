import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5wi-ryfk.css';
import '../../css/d/dtfkzwyic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5wi-ryfk"/><path class="dtfkzwyic"/>`,
		"fallback": "bx:alarm",
	});
}

export default Component;
