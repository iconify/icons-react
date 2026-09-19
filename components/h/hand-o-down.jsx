import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dufl35bfe.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1792) scale(1 -1)"><path class="dufl35bfe"/></g>`,
		"fallback": "fa:hand-o-down",
	});
}

export default Component;
