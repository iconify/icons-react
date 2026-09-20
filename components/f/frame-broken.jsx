import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iauzcee-u.css';
import '../../css/c/c6gs9jbec.css';
import '../../css/n/nrljxrvxd.css';
import '../../css/x/xqz_5lfhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iauzcee-u"/><path class="c6gs9jbec"/><path class="nrljxrvxd"/><path class="xqz_5lfhz"/></g>`,
		"fallback": "solar:frame-broken",
	});
}

export default Component;
