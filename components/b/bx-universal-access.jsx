import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkgfbqhls.css';
import '../../css/w/wckr9kb1z.css';
import '../../css/q/q285h9bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zkgfbqhls"/><path class="wckr9kb1z"/><path class="q285h9bpu"/>`,
		"fallback": "bx:bx-universal-access",
	});
}

export default Component;
