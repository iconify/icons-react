import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0-kxwb1h.css';
import '../../css/u/u34l0vbjl.css';
import '../../css/g/gnwn-8biw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s0-kxwb1h"/><path clip-rule="evenodd" class="u34l0vbjl"/><path class="gnwn-8biw"/></g>`,
		"fallback": "streamline-color:hand-held-tablet-writing-flat",
	});
}

export default Component;
