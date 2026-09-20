import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azf6qdb1g.css';
import '../../css/a/ali3ocbdl.css';
import '../../css/u/uevo4sbur.css';
import '../../css/j/j_qh41bkw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="azf6qdb1g"/><path clip-rule="evenodd" class="ali3ocbdl"/><path class="uevo4sbur"/><path clip-rule="evenodd" class="j_qh41bkw"/></g>`,
		"fallback": "streamline-color:database-lock-flat",
	});
}

export default Component;
