import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q8j5v_boz.css';
import '../../css/f/ftf12jbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q8j5v_boz wm-k"/><path class="ftf12jbxo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:heart-plus",
	});
}

export default Component;
