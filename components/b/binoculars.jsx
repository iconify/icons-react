import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v98yaftnr.css';
import '../../css/w/wyzcj9bru.css';
import '../../css/y/yp56kod4q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v98yaftnr"/><path class="wyzcj9bru"/><path class="yp56kod4q"/></g>`,
		"fallback": "glyphs:binoculars",
	});
}

export default Component;
