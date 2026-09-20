import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnru82rqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnru82rqx"/>`,
		"fallback": "nrk:hardware-game",
	});
}

export default Component;
