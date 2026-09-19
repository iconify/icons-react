import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxb2qnb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxb2qnb-i"/>`,
		"fallback": "griddy-icons:book-filled",
	});
}

export default Component;
