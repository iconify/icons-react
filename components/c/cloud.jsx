import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su8t33t5d.css';

const viewBox = {"width":1435,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su8t33t5d"/>`,
		"fallback": "websymbol:cloud",
	});
}

export default Component;
