import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/he6d35h6g.css';
import '../../css/z/zv9u2-bfd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="he6d35h6g"/><path class="zv9u2-bfd"/></g>`,
		"fallback": "glyphs:copy-outline",
	});
}

export default Component;
