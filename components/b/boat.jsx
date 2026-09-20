import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/treahpxyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="treahpxyu"/>`,
		"fallback": "simple-icons:boat",
	});
}

export default Component;
