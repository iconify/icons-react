import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdleg1rtd.css';
import '../../css/p/pb6sry5oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdleg1rtd"/><path class="pb6sry5oo"/></g>`,
		"fallback": "coolicons:behance-duotone-round",
	});
}

export default Component;
