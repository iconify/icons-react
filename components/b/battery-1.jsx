import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie49pn7lv.css';
import '../../css/r/rlafmm9-k.css';
import '../../css/g/guqiiex5i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ie49pn7lv"/><path class="rlafmm9-k"/><path clip-rule="evenodd" class="guqiiex5i"/></g>`,
		"fallback": "glyphs-poly:battery-1",
	});
}

export default Component;
