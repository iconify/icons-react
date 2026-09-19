import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfs41yb4d.css';
import '../../css/a/a9y45tbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfs41yb4d"/><path class="a9y45tbwj"/>`,
		"fallback": "bx:bookmark-heart",
	});
}

export default Component;
