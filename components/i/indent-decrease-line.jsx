import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-b_krv-u.css';
import '../../css/s/s99lf0bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-b_krv-u"/><path class="s99lf0bbc"/>`,
		"fallback": "mingcute:indent-decrease-line",
	});
}

export default Component;
