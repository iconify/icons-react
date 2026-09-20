import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vc_cs1bnz.css';
import '../../css/s/sj3u3hrzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vc_cs1bnz"/><path class="sj3u3hrzd"/></g>`,
		"fallback": "solar:document-2-bold-duotone",
	});
}

export default Component;
