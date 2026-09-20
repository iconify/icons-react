import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qr3fyccls.css';
import '../../css/d/d5e4tubbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qr3fyccls"/><path class="d5e4tubbr"/></g>`,
		"fallback": "reicon:file-error-filled",
	});
}

export default Component;
