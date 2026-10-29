import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kwfcjcbjq.css';
import '../../css/l/l4-vn6bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kwfcjcbjq"/><path class="l4-vn6bjr wm-a"/></g>`,
		"fallback": "withicons:avatar-person-glasses-solid",
	});
}

export default Component;
