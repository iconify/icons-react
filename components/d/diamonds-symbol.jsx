import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b38lppklq.css';
import '../../css/q/qf2b3nb5f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b38lppklq"/><path class="qf2b3nb5f"/></g>`,
		"fallback": "streamline-color:diamonds-symbol",
	});
}

export default Component;
