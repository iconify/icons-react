import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn3rdabgq.css';
import '../../css/f/fi_q30xur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fn3rdabgq"/><path class="fi_q30xur"/>`,
		"fallback": "ion:compass",
	});
}

export default Component;
