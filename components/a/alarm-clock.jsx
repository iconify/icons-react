import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfqrbxa9s.css';
import '../../css/d/dg_7vuimk.css';
import '../../css/s/sa-k73f8j.css';
import '../../css/u/ubypwjb2e.css';
import '../../css/c/ce55spyep.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nfqrbxa9s"/><path class="dg_7vuimk"/><path class="sa-k73f8j"/><path class="ubypwjb2e"/><path class="ce55spyep"/></g>`,
		"fallback": "glyphs-poly:alarm-clock",
	});
}

export default Component;
