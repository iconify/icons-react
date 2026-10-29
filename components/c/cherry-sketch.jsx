import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g5dvq_klh.css';
import '../../css/p/p68pgcbjk.css';
import '../../css/l/lzad66der.css';
import '../../css/s/sc6ko9v-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g5dvq_klh"/><path class="p68pgcbjk wm-a"/><path class="lzad66der wm-k"/><path class="sc6ko9v-k wm-a"/></g>`,
		"fallback": "withicons:cherry-sketch",
	});
}

export default Component;
