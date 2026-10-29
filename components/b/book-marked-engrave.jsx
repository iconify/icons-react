import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/phvbzeo-p.css';
import '../../css/j/j---ejbcs.css';
import '../../css/j/jfb-yjbgw.css';
import '../../css/q/qaz17vbsh.css';
import '../../css/k/kwybaobhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="phvbzeo-p wm-k"/><path class="j---ejbcs wm-shadow"/><path class="jfb-yjbgw wm-k"/><path class="qaz17vbsh wm-k"/><path class="kwybaobhx wm-a"/></g>`,
		"fallback": "withicons:book-marked-engrave",
	});
}

export default Component;
