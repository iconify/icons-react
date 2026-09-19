import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0w9xzp5p.css';
import '../../css/x/xbu3phb9u.css';
import '../../css/p/pfslbpo-y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p0w9xzp5p"/><path class="xbu3phb9u"/><path class="pfslbpo-y"/></g>`,
		"fallback": "glyphs:binoculars-outline",
	});
}

export default Component;
