import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h2-lb95-v.css';
import '../../css/w/wsu7p3r8t.css';
import '../../css/r/r08zu2b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h2-lb95-v"/><path class="wsu7p3r8t"/><path class="r08zu2b2e"/></g>`,
		"fallback": "streamline-freehand:focus-camera-auto",
	});
}

export default Component;
