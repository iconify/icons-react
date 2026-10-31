import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e-y2mtbbu.css';
import '../../css/d/dwmxtrzeo.css';
import '../../css/f/fap4nybrw.css';
import '../../css/i/ic2u5wcyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e-y2mtbbu wm-shadow"/><path class="dwmxtrzeo wm-shadow"/><path class="fap4nybrw"/><path class="ic2u5wcyn"/></g>`,
		"fallback": "withicons-brutal:egg",
	});
}

export default Component;
