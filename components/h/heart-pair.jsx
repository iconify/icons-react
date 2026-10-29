import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t7us0tats.css';
import '../../css/u/ufuws779a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t7us0tats wm-k"/><path class="ufuws779a wm-a"/></g>`,
		"fallback": "withicons-bauhaus:heart-pair",
	});
}

export default Component;
