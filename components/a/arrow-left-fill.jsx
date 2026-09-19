import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvogu3lmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvogu3lmq"/>`,
		"fallback": "eva:arrow-left-fill",
	});
}

export default Component;
