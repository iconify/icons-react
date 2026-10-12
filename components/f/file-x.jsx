import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_x-rbbvj.css';
import '../../css/i/ixe34dbmo.css';
import '../../css/r/riuv0svnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_x-rbbvj"/><path class="ixe34dbmo"/><path class="riuv0svnh"/></g>`,
		"fallback": "andrsrxn:file-x",
	});
}

export default Component;
