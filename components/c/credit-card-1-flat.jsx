import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e295xqbqo.css';
import '../../css/u/u69d3ngeq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e295xqbqo"/><path clip-rule="evenodd" class="u69d3ngeq"/></g>`,
		"fallback": "streamline-color:credit-card-1-flat",
	});
}

export default Component;
