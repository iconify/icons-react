import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/np_3uwb3h.css';
import '../../css/y/y7wm307so.css';
import '../../css/p/pwa13k8ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="np_3uwb3h"/><circle class="y7wm307so"/><path class="pwa13k8ww"/></g>`,
		"fallback": "reicon:gaming-buttons-filled",
	});
}

export default Component;
