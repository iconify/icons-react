import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bym8zsb_r.css';
import '../../css/z/z566erb8j.css';
import '../../css/u/ur1ufwbfi.css';
import '../../css/i/ike3v34es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bym8zsb_r"/><path class="z566erb8j"/><path class="ur1ufwbfi"/><path class="ike3v34es"/></g>`,
		"fallback": "solar:chat-round-code-bold-duotone",
	});
}

export default Component;
