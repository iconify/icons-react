import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zrx87hbvk.css';
import '../../css/r/ra-yy8bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k zrx87hbvk"/><path class="ra-yy8bbm wm-a"/></g>`,
		"fallback": "withicons:holly-gloss",
	});
}

export default Component;
