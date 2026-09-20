import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cht6ooc3g.css';
import '../../css/f/f-7edlmbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cht6ooc3g"/><path class="f-7edlmbn"/></g>`,
		"fallback": "solar:bookmark-square-outline",
	});
}

export default Component;
