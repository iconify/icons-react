import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8b8npfbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8b8npfbz"/>`,
		"fallback": "stash:angle-down",
	});
}

export default Component;
