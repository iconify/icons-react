import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyu31wnfy.css';
import '../../css/k/khugd7bfb.css';
import '../../css/w/wbt629b_y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jyu31wnfy"/><path clip-rule="evenodd" class="khugd7bfb"/><path class="wbt629b_y"/></g>`,
		"fallback": "streamline-color:calculator-2",
	});
}

export default Component;
