import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fc6tnlbbc.css';
import '../../css/g/gptx6rbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fc6tnlbbc"/><path class="gptx6rbqt"/></g>`,
		"fallback": "andrsrxn:artboard-cursor",
	});
}

export default Component;
