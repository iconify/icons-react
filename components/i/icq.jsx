import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg2nasbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg2nasbvf"/>`,
		"fallback": "thesvg:icq",
	});
}

export default Component;
