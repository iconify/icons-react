import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q73d8pb9b.css';
import '../../css/k/k-euat6ge.css';
import '../../css/r/r34fzgoxu.css';
import '../../css/u/ukspl3bmt.css';
import '../../css/l/l_43hltyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q73d8pb9b"/><path class="k-euat6ge"/><path class="r34fzgoxu"/><path class="ukspl3bmt"/><path class="l_43hltyf"/></g>`,
		"fallback": "andrsrxn:file-reference",
	});
}

export default Component;
