import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1-l-5b8u.css';
import '../../css/u/uqwft5hcw.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j1-l-5b8u"/><path class="uqwft5hcw"/></g>`,
		"fallback": "icon-park-outline:bowling",
	});
}

export default Component;
