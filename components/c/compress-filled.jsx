import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm7ergh6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm7ergh6z"/>`,
		"fallback": "reicon:compress-filled",
	});
}

export default Component;
