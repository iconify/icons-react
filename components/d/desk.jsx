import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7-7g636e.css';
import '../../css/j/jw3axbcbb.css';
import '../../css/p/pb9qdmbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7-7g636e"/><path class="jw3axbcbb"/><path class="pb9qdmbcb"/></g>`,
		"fallback": "andrsrxn:desk",
	});
}

export default Component;
