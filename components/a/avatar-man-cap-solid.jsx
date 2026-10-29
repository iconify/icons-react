import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lg4rubrrw.css';
import '../../css/x/x234avlka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lg4rubrrw"/><path class="wm-a x234avlka"/></g>`,
		"fallback": "withicons:avatar-man-cap-solid",
	});
}

export default Component;
