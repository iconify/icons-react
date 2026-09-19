import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyoj2sb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyoj2sb5p"/>`,
		"fallback": "bx:bxs-quote-alt-left",
	});
}

export default Component;
