import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v7s9w8b_e.css';
import '../../css/j/jjo3t6bpq.css';
import '../../css/b/bbf80ib2m.css';
import '../../css/i/i3cicmb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v7s9w8b_e"/><path class="jjo3t6bpq wm-a"/><path class="bbf80ib2m"/><path class="i3cicmb7p wm-a"/></g>`,
		"fallback": "withicons:heart-balloon-duo",
	});
}

export default Component;
