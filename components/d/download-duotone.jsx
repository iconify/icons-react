import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/evpekyz3z.css';
import '../../css/d/dgvc1db7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="evpekyz3z"/><path class="dgvc1db7t"/></g>`,
		"fallback": "keyline-icons:download-duotone",
	});
}

export default Component;
