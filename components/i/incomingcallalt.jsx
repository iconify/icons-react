import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7-gywbgd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7-gywbgd"/>`,
		"fallback": "whh:incomingcallalt",
	});
}

export default Component;
