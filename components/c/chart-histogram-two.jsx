import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lan-8fk_e.css';
import '../../css/b/bnf8j9biy.css';
import '../../css/y/y15m6qfes.css';
import '../../css/j/jto9u1guw.css';
import '../../css/f/f-0nn-xyq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lan-8fk_e"/><path class="bnf8j9biy"/><rect class="y15m6qfes"/><rect class="jto9u1guw"/><rect class="f-0nn-xyq"/></g>`,
		"fallback": "icon-park:chart-histogram-two",
	});
}

export default Component;
