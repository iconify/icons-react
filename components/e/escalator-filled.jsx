import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_4g8ix3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_4g8ix3k"/>`,
		"fallback": "griddy-icons:escalator-filled",
	});
}

export default Component;
