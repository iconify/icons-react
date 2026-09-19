import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru0o-1bas.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1536 0) scale(-1 1)"><path class="ru0o-1bas"/></g>`,
		"fallback": "fa:caret-square-o-right",
	});
}

export default Component;
