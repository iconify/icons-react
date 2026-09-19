import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvbsn2-th.css';
import '../../css/k/k6e6vwfxg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bvbsn2-th"/><path class="k6e6vwfxg"/></g>`,
		"fallback": "glyphs:arrows-expand-duo-duo",
	});
}

export default Component;
