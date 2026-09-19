import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yso2nbc4v.css';
import '../../css/q/qpqtv0b6u.css';
import '../../css/f/fz4zvjbkm.css';
import '../../css/e/e7kz5dnki.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yso2nbc4v"/><path class="qpqtv0b6u"/><path class="fz4zvjbkm"/><path class="e7kz5dnki"/></g>`,
		"fallback": "glyphs:flag-1-bold",
	});
}

export default Component;
