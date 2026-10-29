import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ic5g_yble.css';
import '../../css/s/smls78shz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ic5g_yble"/><path class="smls78shz wm-a"/></g>`,
		"fallback": "withicons:door-closed",
	});
}

export default Component;
