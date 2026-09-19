import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/l/leakr4_1e.css';
import '../../css/f/fudu618jx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="leakr4_1e"/><path class="fudu618jx"/></g>`,
		"fallback": "catppuccin:cypress",
	});
}

export default Component;
