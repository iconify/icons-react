import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwcfj9bbi.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/y7nc0n54c.css';
import '../../css/a/ad4rbcc7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hwcfj9bbi"/><g class="mc2zb0bvp"><path class="y7nc0n54c"/><path class="ad4rbcc7x"/></g></g>`,
		"fallback": "solar:hashtag-chat-bold-duotone",
	});
}

export default Component;
