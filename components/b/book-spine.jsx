import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0hk__bji.css';
import '../../css/g/gyl4sqckb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="m0hk__bji"/><path class="gyl4sqckb"/></g>`,
		"fallback": "glyphs-poly:book-spine",
	});
}

export default Component;
