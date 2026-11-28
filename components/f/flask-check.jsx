import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7j7arb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7j7arb4k"/>`,
		"fallback": "noviair-light:flask-check",
	});
}

export default Component;
