import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bqt_t9bbz.css';
import '../../css/i/ir-n7mb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bqt_t9bbz wm-k"/><path class="ir-n7mb5m wm-a"/></g>`,
		"fallback": "withicons:cricket-sketch",
	});
}

export default Component;
