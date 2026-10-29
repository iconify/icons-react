import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g-31xg9_q.css';
import '../../css/b/bniz3z8pj.css';
import '../../css/e/e52-lccxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g-31xg9_q"/><path class="bniz3z8pj wm-shadow"/><path class="e52-lccxv"/></g>`,
		"fallback": "withicons:barcode-engrave",
	});
}

export default Component;
