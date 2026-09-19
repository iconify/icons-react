import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3utn-y9c.css';
import '../../css/w/waww24_9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3utn-y9c"/><path class="waww24_9q"/>`,
		"fallback": "bx:bug-alt",
	});
}

export default Component;
