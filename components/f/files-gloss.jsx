import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p4s69zf6w.css';
import '../../css/z/zgi-kpbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="p4s69zf6w wm-k"/><path class="wm-a zgi-kpbpc"/></g>`,
		"fallback": "withicons:files-gloss",
	});
}

export default Component;
