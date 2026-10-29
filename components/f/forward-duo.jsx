import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kc_loxu3p.css';
import '../../css/l/lb1a6hbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kc_loxu3p"/><path class="lb1a6hbix wm-a"/></g>`,
		"fallback": "withicons:forward-duo",
	});
}

export default Component;
