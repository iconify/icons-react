import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/z/zaqvlfbvr.css';
import '../../css/r/ra5211m5d.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="zaqvlfbvr"/><path class="ra5211m5d"/></g>`,
		"fallback": "system-uicons:file-upload",
	});
}

export default Component;
