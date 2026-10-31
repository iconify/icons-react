import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z7ivyjbuf.css';
import '../../css/c/cw_0qobox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z7ivyjbuf"/><path class="cw_0qobox"/></g>`,
		"fallback": "coolicons:hand-coins-duocolor-round",
	});
}

export default Component;
