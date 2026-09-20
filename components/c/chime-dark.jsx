import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5pjv9b5y.css';
import '../../css/t/tzdbsnb3r.css';
import '../../css/c/c4lng84yu.css';

const viewBox = {"width":672,"height":193};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5pjv9b5y"><path class="tzdbsnb3r"/><path clip-rule="evenodd" class="c4lng84yu"/></g>`,
		"fallback": "thesvg-color:chime-dark",
	});
}

export default Component;
