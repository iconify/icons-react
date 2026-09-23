import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xuavuhbkk.css';
import '../../css/f/flup9g6cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xuavuhbkk"/><path class="flup9g6cc"/></g>`,
		"fallback": "keyline-icons:inbox-sparkles-fill",
	});
}

export default Component;
