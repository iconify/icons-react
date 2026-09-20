import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4s51m2cx.css';
import '../../css/u/u2p3f39gf.css';
import '../../css/j/j7raxo7it.css';
import '../../css/y/y295kubtu.css';
import '../../css/i/irdcs-buf.css';
import '../../css/r/rpflsgbds.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e4s51m2cx"/><path class="u2p3f39gf"/><path class="j7raxo7it"/><path class="y295kubtu"/><path class="irdcs-buf"/><path class="rpflsgbds"/></g>`,
		"fallback": "streamline-color:attribution",
	});
}

export default Component;
