import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i09dd_iqf.css';
import '../../css/k/kxbkcp9wd.css';
import '../../css/v/v3dbaokhc.css';
import '../../css/r/r0v6itbzy.css';
import '../../css/l/ltpyfabni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i09dd_iqf wm-k"/><path class="kxbkcp9wd wm-a"/><path class="v3dbaokhc wm-shadow"/><path class="r0v6itbzy wm-a"/><path class="ltpyfabni wm-k"/></g>`,
		"fallback": "withicons:headphones-engrave",
	});
}

export default Component;
