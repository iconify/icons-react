import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k23ulv_5u.css';
import '../../css/s/s5uas9_wu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k23ulv_5u"/><path class="s5uas9_wu"/></g>`,
		"fallback": "glyphs:hand-holding-water-duo",
	});
}

export default Component;
