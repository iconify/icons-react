import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fujcy6boh.css';
import '../../css/c/cp8hlbbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fujcy6boh"/><path class="cp8hlbbqx wm-s"/></g>`,
		"fallback": "withicons:cloud-upload-solid",
	});
}

export default Component;
