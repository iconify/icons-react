import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3r6fc7ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3r6fc7ib"/>`,
		"fallback": "reicon:drop3-filled",
	});
}

export default Component;
