import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r9tse954q.css';
import '../../css/m/mw18x7e1t.css';
import '../../css/m/mkx5poo2c.css';
import '../../css/v/vnfxnab9g.css';
import '../../css/f/f8v0rhb7f.css';
import '../../css/r/r81w0u6cn.css';
import '../../css/o/ob35u0bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r9tse954q"/><path class="mw18x7e1t"/><path class="mkx5poo2c"/><path class="vnfxnab9g"/><path class="f8v0rhb7f"/><path class="r81w0u6cn"/><path class="ob35u0bzq"/></g>`,
		"fallback": "solar:hand-money-broken",
	});
}

export default Component;
