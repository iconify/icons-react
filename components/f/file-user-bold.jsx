import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2b6k5bqi.css';
import '../../css/j/j5v3k4mhw.css';
import '../../css/s/se-wl_b4d.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2b6k5bqi"/><path class="j5v3k4mhw"/><path clip-rule="evenodd" class="se-wl_b4d"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-user-bold",
	});
}

export default Component;
