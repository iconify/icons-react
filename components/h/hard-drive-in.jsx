import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc3nxhbcu.css';
import '../../css/t/tg23tgs8r.css';
import '../../css/n/n21a0m78c.css';
import '../../css/e/ec768tfqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hc3nxhbcu"/><path class="tg23tgs8r"/><path class="n21a0m78c"/><path class="ec768tfqg"/></g>`,
		"fallback": "andrsrxn:hard-drive-in",
	});
}

export default Component;
