import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sslzmeb7d.css';
import '../../css/y/yny5wvq0t.css';
import '../../css/a/a_064-ors.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sslzmeb7d"/><path class="yny5wvq0t"/><path class="a_064-ors"/></g>`,
		"fallback": "andrsrxn:bread-slice",
	});
}

export default Component;
