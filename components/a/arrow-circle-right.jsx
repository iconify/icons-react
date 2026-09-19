import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0flmbb4m.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1536 0) scale(-1 1)"><path class="v0flmbb4m"/></g>`,
		"fallback": "fa:arrow-circle-right",
	});
}

export default Component;
