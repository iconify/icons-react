import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jojzoaclr.css';
import '../../css/i/i380w0woj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jojzoaclr"/><path class="i380w0woj"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-end-sharp-two-tone",
	});
}

export default Component;
