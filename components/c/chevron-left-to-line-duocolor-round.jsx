import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbg4my0kw.css';
import '../../css/d/dqdgtqyjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fbg4my0kw"/><path class="dqdgtqyjs"/></g>`,
		"fallback": "coolicons:chevron-left-to-line-duocolor-round",
	});
}

export default Component;
