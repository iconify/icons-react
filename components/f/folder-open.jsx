import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9zo70bzb.css';
import '../../css/r/rdbbxab4u.css';
import '../../css/l/lk9fa_b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9zo70bzb"/><path class="rdbbxab4u"/><path class="lk9fa_b0q"/></g>`,
		"fallback": "andrsrxn:folder-open",
	});
}

export default Component;
