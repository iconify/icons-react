import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/issvf4f6w.css';
import '../../css/q/qgxoqls8f.css';
import '../../css/u/u9jysnb6v.css';
import '../../css/p/p13mxbcak.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="issvf4f6w"/><path clip-rule="evenodd" class="qgxoqls8f"/><path class="u9jysnb6v"/><path class="p13mxbcak"/></g>`,
		"fallback": "streamline-flex-color:alien",
	});
}

export default Component;
