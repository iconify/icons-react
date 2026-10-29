import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y54ajsbap.css';
import '../../css/v/vneg5ccou.css';
import '../../css/a/apg-cbbxs.css';
import '../../css/x/xuvakobqo.css';
import '../../css/q/q_4jikc6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="y54ajsbap"/><path class="vneg5ccou wm-k"/><path class="apg-cbbxs wm-a"/><path class="wm-k xuvakobqo"/><path class="q_4jikc6k wm-a"/></g>`,
		"fallback": "withicons:bookmark-check-sketch",
	});
}

export default Component;
