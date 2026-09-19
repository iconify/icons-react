import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i11jghbrq.css';
import '../../css/y/yngtobcdp.css';
import '../../css/w/wmhvecc2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i11jghbrq"/><path class="yngtobcdp"/><path class="wmhvecc2b"/></g>`,
		"fallback": "iconoir:consumable",
	});
}

export default Component;
