import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q4ah8fbsm.css';
import '../../css/y/yyru89eax.css';
import '../../css/k/kgl-8sirp.css';
import '../../css/a/ain1tnbxt.css';
import '../../css/s/sy7kpcbuo.css';
import '../../css/m/miknsv_yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q4ah8fbsm wm-k"/><path class="wm-s yyru89eax"/><path class="kgl-8sirp wm-shadow"/><path class="ain1tnbxt wm-k"/><path class="sy7kpcbuo wm-a"/><path class="miknsv_yb wm-s"/></g>`,
		"fallback": "withicons:image-plus-engrave",
	});
}

export default Component;
