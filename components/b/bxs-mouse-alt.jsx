import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaw-asy7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaw-asy7l"/>`,
		"fallback": "bx:bxs-mouse-alt",
	});
}

export default Component;
