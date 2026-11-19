import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4fq5_bir.css';
import '../../css/k/km1b4fqul.css';
import '../../css/w/wm9u71thl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="r4fq5_bir"/><path class="km1b4fqul"/><path class="wm9u71thl"/></g>`,
		"fallback": "andrsrxn:degree-360",
	});
}

export default Component;
