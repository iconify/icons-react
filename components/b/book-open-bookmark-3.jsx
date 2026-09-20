import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9_ln-zng.css';
import '../../css/e/evqnqysoc.css';
import '../../css/l/l7jrfcblp.css';
import '../../css/p/pjisd3-zr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9_ln-zng"/><path class="evqnqysoc"/><path class="l7jrfcblp"/><path class="pjisd3-zr"/></g>`,
		"fallback": "streamline-cyber-color:book-open-bookmark-3",
	});
}

export default Component;
