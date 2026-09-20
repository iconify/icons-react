import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtyp_jihh.css';
import '../../css/f/fh3kbwobr.css';
import '../../css/q/q7cll_b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtyp_jihh"/><path class="fh3kbwobr"/><path clip-rule="evenodd" class="q7cll_b2k"/>`,
		"fallback": "stash:data-date-duotone",
	});
}

export default Component;
