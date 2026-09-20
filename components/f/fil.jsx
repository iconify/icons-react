import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guhgj0rvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guhgj0rvq"/>`,
		"fallback": "token:fil",
	});
}

export default Component;
