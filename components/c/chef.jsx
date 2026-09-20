import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvua6pl2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvua6pl2q"/>`,
		"fallback": "thesvg-color:chef",
	});
}

export default Component;
