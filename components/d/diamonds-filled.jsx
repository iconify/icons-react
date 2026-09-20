import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh0rkqbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh0rkqbdz"/>`,
		"fallback": "reicon:diamonds-filled",
	});
}

export default Component;
