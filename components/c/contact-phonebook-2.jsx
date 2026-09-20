import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jc201ubkb.css';
import '../../css/f/fonruublk.css';
import '../../css/w/wzspxtbtg.css';
import '../../css/u/u9g1h0bnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jc201ubkb"/><path class="fonruublk"/><path class="wzspxtbtg"/><path class="u9g1h0bnm"/></g>`,
		"fallback": "streamline-color:contact-phonebook-2",
	});
}

export default Component;
