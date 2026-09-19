import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/j/jiqwlhp5k.css';
import '../../css/d/d-unpqbnf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="jiqwlhp5k"/><path class="d-unpqbnf"/></g>`,
		"fallback": "catppuccin:histoire",
	});
}

export default Component;
