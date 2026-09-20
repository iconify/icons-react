import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aul8oe8-c.css';
import '../../css/u/uawzs83_s.css';
import '../../css/q/qj4npqwtq.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGWRURAe4x" class="aul8oe8-c"/><path id="SVGPpk4dxYa" class="uawzs83_s"/></defs><g class="qj4npqwtq"><use href="#SVGWRURAe4x"/><use href="#SVGPpk4dxYa"/></g><g class="jn8qy4bru"><use href="#SVGWRURAe4x"/><use href="#SVGPpk4dxYa"/></g>`,
		"fallback": "openmoji:clockwise-vertical-arrows",
	});
}

export default Component;
