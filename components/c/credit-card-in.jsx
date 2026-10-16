import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2j6rdzub.css';
import '../../css/s/s89p6vbph.css';
import '../../css/j/j7seo5f7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o2j6rdzub"/><path class="s89p6vbph"/><path class="j7seo5f7t"/></g>`,
		"fallback": "andrsrxn:credit-card-in",
	});
}

export default Component;
