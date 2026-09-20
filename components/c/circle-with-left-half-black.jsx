import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebpu-5arf.css';
import '../../css/n/n9gulmzpi.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/d/dm8dtzb9t.css';
import '../../css/p/p6-p-0qyp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebpu-5arf"/><path class="n9gulmzpi"/><g class="brzn_0bpr"><path class="dm8dtzb9t"/><path class="p6-p-0qyp"/></g>`,
		"fallback": "openmoji:circle-with-left-half-black",
	});
}

export default Component;
