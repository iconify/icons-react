import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fb8vwhb_r.css';
import '../../css/u/ua-ambc_i.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fb8vwhb_r"/><path class="ua-ambc_i"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`,
		"fallback": "solar:accessibility-outline",
	});
}

export default Component;
