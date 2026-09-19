import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ufljtw8pg.css';
import '../../css/a/aduav3ayg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ufljtw8pg"/><path class="aduav3ayg"/></g>`,
		"fallback": "bi:chevron-double-down",
	});
}

export default Component;
