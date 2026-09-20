import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ruvbc5bnf.css';
import '../../css/e/e8bbq1b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ruvbc5bnf"/><path class="e8bbq1b0c"/></g>`,
		"fallback": "streamline-ultimate:flip-vertical-down",
	});
}

export default Component;
