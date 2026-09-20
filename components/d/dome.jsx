import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/op0hutb2r.css';
import '../../css/r/r4nu2xy8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="op0hutb2r"/><path class="r4nu2xy8k"/></g>`,
		"fallback": "lucide:dome",
	});
}

export default Component;
