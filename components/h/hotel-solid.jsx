import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q81twobot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q81twobot"/>`,
		"fallback": "iconaut:hotel-solid",
	});
}

export default Component;
