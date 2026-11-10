import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/so8jj_bwo.css';
import '../../css/u/uhu8e55_q.css';
import '../../css/b/ba2k-sb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="so8jj_bwo"/><path class="uhu8e55_q"/><path class="ba2k-sb7w"/></g>`,
		"fallback": "andrsrxn:folder-in",
	});
}

export default Component;
