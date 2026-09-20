import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/po4xrpbdf.css';
import '../../css/b/b6iqi9brr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="po4xrpbdf"/><path class="b6iqi9brr"/></g>`,
		"fallback": "streamline-color:dice-1-flat",
	});
}

export default Component;
