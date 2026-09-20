import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voay2fb_x.css';
import '../../css/l/l-hb7_w0z.css';
import '../../css/h/h5aevgb_l.css';
import '../../css/m/mjh1mwb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voay2fb_x"/><path class="l-hb7_w0z"/><path class="h5aevgb_l"/><path clip-rule="evenodd" class="mjh1mwb1q"/>`,
		"fallback": "solar:home-wifi-outline",
	});
}

export default Component;
