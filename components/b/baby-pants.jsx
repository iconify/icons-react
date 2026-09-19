import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hb42i22zt.css';
import '../../css/b/bn5r6w_wn.css';
import '../../css/x/xtspv7bqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="hb42i22zt"/><path class="bn5r6w_wn"/><path class="xtspv7bqw"/></g>`,
		"fallback": "icon-park-outline:baby-pants",
	});
}

export default Component;
