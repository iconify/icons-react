import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2sryobdh.css';

const viewBox = {"width":857,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2sryobdh"/>`,
		"fallback": "websymbol:arrows-cw",
	});
}

export default Component;
