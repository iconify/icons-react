import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4xb59g6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4xb59g6x"/>`,
		"fallback": "reicon:bones-filled",
	});
}

export default Component;
