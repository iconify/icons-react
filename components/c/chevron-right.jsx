import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/kfswb1b-d.css';
import '../../css/p/puidc5v1k.css';
import '../../css/o/oohberbnf.css';
import '../../css/r/r86xtobab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="kfswb1b-d wm-shadow"/><path class="puidc5v1k wm-shadow"/><path class="oohberbnf"/><path class="r86xtobab"/></g>`,
		"fallback": "withicons-brutal:chevron-right",
	});
}

export default Component;
