import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/esykvidxt.css';
import '../../css/i/ib5oyob7o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="esykvidxt"/><path class="ib5oyob7o"/></g>`,
		"fallback": "quill:chat",
	});
}

export default Component;
