import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hopwxcc7e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hopwxcc7e"/>`,
		"fallback": "oi:fullscreen-exit",
	});
}

export default Component;
