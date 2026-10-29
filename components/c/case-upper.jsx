import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3oo0dbxq.css';
import '../../css/q/q9y25jbft.css';
import '../../css/i/iqa6r72ae.css';
import '../../css/p/psvuw--lr.css';
import '../../css/v/vopg58b3o.css';
import '../../css/r/rgh4eactm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p3oo0dbxq wm-k"/><path class="q9y25jbft wm-k"/><path class="iqa6r72ae wm-k"/><path class="psvuw--lr wm-a"/><path class="vopg58b3o wm-a"/><path class="rgh4eactm wm-a"/></g>`,
		"fallback": "withicons-anime:case-upper",
	});
}

export default Component;
