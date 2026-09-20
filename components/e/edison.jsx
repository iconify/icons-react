import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trpj3ccoh.css';
import '../../css/x/x09lifb8w.css';

const viewBox = {"width":1511,"height":1375};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGOmuFfroj" clipPathUnits="userSpaceOnUse"><path class="trpj3ccoh"/></clipPath></defs><g clip-path="url(#SVGOmuFfroj)"><path class="x09lifb8w"/></g>`,
		"fallback": "thesvg:edison",
	});
}

export default Component;
