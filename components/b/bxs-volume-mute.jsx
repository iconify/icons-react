import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6cruiyxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6cruiyxc"/>`,
		"fallback": "bx:bxs-volume-mute",
	});
}

export default Component;
