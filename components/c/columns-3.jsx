import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/i/i9ptl6b7t.css';
import '../../css/t/txd1p9bsj.css';
import '../../css/u/uqgtd6bue.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="i9ptl6b7t"/><rect class="txd1p9bsj"/><rect class="uqgtd6bue"/></g>`,
		"fallback": "glyphs-poly:columns-3",
	});
}

export default Component;
