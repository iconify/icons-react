import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0bejgr8a.css';
import '../../css/q/q38t0ccje.css';
import '../../css/x/xtah66b9b.css';
import '../../css/a/ao27dv7-j.css';
import '../../css/o/oqr3w3gyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w0bejgr8a"/><circle class="q38t0ccje"/><path class="xtah66b9b"/><circle class="ao27dv7-j"/><path class="oqr3w3gyj"/></g>`,
		"fallback": "andrsrxn:disability",
	});
}

export default Component;
