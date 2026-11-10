import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2e68l5vv.css';
import '../../css/i/ig7og-50b.css';
import '../../css/r/rg2t0gbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n2e68l5vv"/><path class="ig7og-50b"/><path class="rg2t0gbgx"/></g>`,
		"fallback": "andrsrxn:cardholder",
	});
}

export default Component;
