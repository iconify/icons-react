import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7h06gy3r.css';
import '../../css/r/rsdi6jb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m7h06gy3r secondary"/><path class="primary rsdi6jb7y"/></g>`,
		"fallback": "iconaut:cloud-moon-lightning-duotone",
	});
}

export default Component;
