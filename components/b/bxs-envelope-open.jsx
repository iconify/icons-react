import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwusq4bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwusq4bjs"/>`,
		"fallback": "bx:bxs-envelope-open",
	});
}

export default Component;
