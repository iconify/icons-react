import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgjy_wb0h.css';
import '../../css/m/mdrsd_l0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qgjy_wb0h"/><path clip-rule="evenodd" class="mdrsd_l0q"/></g>`,
		"fallback": "streamline-flex-color:dribble-flat",
	});
}

export default Component;
