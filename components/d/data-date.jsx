import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh3kbwobr.css';
import '../../css/q/q7cll_b2k.css';
import '../../css/c/cpbja35_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh3kbwobr"/><path clip-rule="evenodd" class="q7cll_b2k"/><path clip-rule="evenodd" class="cpbja35_v"/>`,
		"fallback": "stash:data-date",
	});
}

export default Component;
