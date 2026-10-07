import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qpm_gor2e.css';
import '../../css/d/d6b4de7gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qpm_gor2e"/><path class="d6b4de7gk"/></g>`,
		"fallback": "iconoir:closed-captions",
	});
}

export default Component;
