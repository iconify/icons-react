import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtwsgrb3o.css';
import '../../css/b/bt-bz2bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gtwsgrb3o secondary"/><path class="bt-bz2bne primary"/></g>`,
		"fallback": "iconaut:bluetooth-connected-duotone",
	});
}

export default Component;
