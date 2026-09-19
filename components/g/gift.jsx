import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsyui3apw.css';
import '../../css/a/angho8bkl.css';
import '../../css/r/rbdb7-vno.css';
import '../../css/y/yecpylz9u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qsyui3apw"/><path clip-rule="evenodd" class="angho8bkl"/><path class="rbdb7-vno"/><path class="yecpylz9u"/></g>`,
		"fallback": "glyphs-poly:gift",
	});
}

export default Component;
