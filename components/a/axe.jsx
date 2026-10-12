import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8p9beb9t.css';
import '../../css/n/nr90d_bue.css';
import '../../css/k/k1a7lecsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8p9beb9t"/><path class="nr90d_bue"/><path class="k1a7lecsj"/></g>`,
		"fallback": "andrsrxn:axe",
	});
}

export default Component;
