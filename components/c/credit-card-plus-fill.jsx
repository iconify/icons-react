import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yshcjbced.css';
import '../../css/t/tq61_obnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yshcjbced"/><path class="tq61_obnf"/></g>`,
		"fallback": "keyline-icons:credit-card-plus-fill",
	});
}

export default Component;
