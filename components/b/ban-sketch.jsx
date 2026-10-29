import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bksvuqoix.css';
import '../../css/w/wn6sq5bdr.css';
import '../../css/z/zoi-i9f3r.css';
import '../../css/s/s_8u5ojaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bksvuqoix"/><path class="wm-k wn6sq5bdr"/><path class="wm-k zoi-i9f3r"/><path class="s_8u5ojaz wm-a"/></g>`,
		"fallback": "withicons:ban-sketch",
	});
}

export default Component;
