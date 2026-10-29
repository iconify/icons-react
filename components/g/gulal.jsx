import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ypp-3zpxo.css';
import '../../css/f/fg2y3xxns.css';
import '../../css/g/go76e-bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k ypp-3zpxo"/><path class="fg2y3xxns wm-a"/><path class="go76e-bvo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:gulal",
	});
}

export default Component;
