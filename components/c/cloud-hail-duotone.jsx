import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evpme1aoy.css';
import '../../css/l/l3pbrvbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="evpme1aoy secondary"/><path class="l3pbrvbmf primary"/></g>`,
		"fallback": "iconaut:cloud-hail-duotone",
	});
}

export default Component;
