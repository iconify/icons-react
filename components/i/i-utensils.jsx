import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i1u30dbee.css';
import '../../css/f/f1ce5eomr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i1u30dbee"/><path class="f1ce5eomr"/></g>`,
		"fallback": "healthicons:i-utensils",
	});
}

export default Component;
