import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e4gxczs5w.css';
import '../../css/f/fkjmpacvr.css';
import '../../css/v/vg8h-n5eh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e4gxczs5w wm-s"/><path class="fkjmpacvr wm-a"/><path class="vg8h-n5eh wm-k"/></g>`,
		"fallback": "withicons:candy-bucket-gloss",
	});
}

export default Component;
