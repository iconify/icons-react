import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kuuho-btb.css';
import '../../css/r/ruvbxe6ge.css';
import '../../css/u/upnry9bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kuuho-btb wm-k"/><path class="ruvbxe6ge wm-shine"/><path class="upnry9bsk wm-shine"/></g>`,
		"fallback": "withicons-lunar:avatar-panda",
	});
}

export default Component;
