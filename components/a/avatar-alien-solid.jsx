import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dzfh84b7l.css';
import '../../css/m/msxcsdb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dzfh84b7l"/><path class="msxcsdb6f wm-s"/></g>`,
		"fallback": "withicons:avatar-alien-solid",
	});
}

export default Component;
