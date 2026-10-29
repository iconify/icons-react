import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ewb4c0zlw.css';
import '../../css/p/pht4mnbru.css';
import '../../css/p/pfp6hfb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ewb4c0zlw"/><path class="pht4mnbru wm-a"/><path class="pfp6hfb3z wm-s"/></g>`,
		"fallback": "withicons:avatar-monster",
	});
}

export default Component;
