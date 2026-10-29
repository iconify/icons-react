import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f2i3zrblc.css';
import '../../css/i/ijxc9x4ab.css';
import '../../css/x/xxt23ubae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f2i3zrblc wm-k"/><path class="ijxc9x4ab"/><path class="wm-s xxt23ubae"/></g>`,
		"fallback": "withicons-bauhaus:clock-check",
	});
}

export default Component;
