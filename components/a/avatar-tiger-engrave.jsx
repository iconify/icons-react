import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vys_njbbu.css';
import '../../css/b/b34zc16tc.css';
import '../../css/b/bncus0vco.css';
import '../../css/s/ssadnlb_w.css';
import '../../css/r/r2o5n7qei.css';
import '../../css/p/plwqyqbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vys_njbbu wm-k"/><path class="b34zc16tc wm-a"/><path class="bncus0vco wm-shadow"/><path class="ssadnlb_w wm-k"/><path class="r2o5n7qei wm-k"/><path class="plwqyqbee wm-a"/></g>`,
		"fallback": "withicons:avatar-tiger-engrave",
	});
}

export default Component;
