import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4d5mwegt.css';
import '../../css/s/sq5o0oesq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="c4d5mwegt"/><path class="sq5o0oesq"/></g>`,
		"fallback": "cryptocurrency-color:bsv",
	});
}

export default Component;
