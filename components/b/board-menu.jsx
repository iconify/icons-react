import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qvo4m5btw.css';
import '../../css/r/rnhmxj7xi.css';
import '../../css/c/cotel_nkl.css';
import '../../css/w/wuda5lbyl.css';
import '../../css/x/xtrg9abmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qvo4m5btw"/><path class="rnhmxj7xi"/><path class="cotel_nkl"/><path class="wuda5lbyl"/><path class="xtrg9abmn"/></g>`,
		"fallback": "matita:board-menu",
	});
}

export default Component;
