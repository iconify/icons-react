import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nubud3uip.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nubud3uip"/>`,
		"fallback": "whh:drawer",
	});
}

export default Component;
