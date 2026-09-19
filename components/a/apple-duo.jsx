import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xba_y6h8b.css';
import '../../css/n/nvvjxctmi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xba_y6h8b"/><path class="nvvjxctmi"/></g>`,
		"fallback": "glyphs:apple-duo",
	});
}

export default Component;
