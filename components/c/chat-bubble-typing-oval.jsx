import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhrkg_bze.css';
import '../../css/u/u-yyw_bkw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bhrkg_bze"/><path class="u-yyw_bkw"/></g>`,
		"fallback": "streamline-flex-color:chat-bubble-typing-oval",
	});
}

export default Component;
