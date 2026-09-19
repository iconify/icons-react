import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4y92abcd.css';
import '../../css/z/zusr_mb9w.css';
import '../../css/t/tf5ukcbuf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4y92abcd"/><path class="zusr_mb9w"/><path class="tf5ukcbuf"/></g>`,
		"fallback": "glyphs:graduation-cap-duo",
	});
}

export default Component;
