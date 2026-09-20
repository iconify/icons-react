import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yec81qbcc.css';
import '../../css/k/k1cl4ekoc.css';
import '../../css/t/tvtf0bi8n.css';
import '../../css/c/c0oel-bka.css';
import '../../css/b/b5tvhkbxz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yec81qbcc"/><path clip-rule="evenodd" class="k1cl4ekoc"/><path class="tvtf0bi8n"/><path class="c0oel-bka"/><path class="b5tvhkbxz"/></g>`,
		"fallback": "streamline-color:high-speed-train-front",
	});
}

export default Component;
