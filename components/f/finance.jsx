import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/y/yl8nvnbzd.css';
import '../../css/b/bf33dpbcm.css';
import '../../css/i/i79-xgbhl.css';
import '../../css/i/i41iyybok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="yl8nvnbzd"/><path class="bf33dpbcm"/><path class="i79-xgbhl"/><path class="i41iyybok"/></g>`,
		"fallback": "icon-park:finance",
	});
}

export default Component;
