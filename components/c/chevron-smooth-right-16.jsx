import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-mxqeckc.css';
import '../../css/x/xam7olb4z.css';
import '../../css/w/wt22uxb8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x-mxqeckc"/><path clip-rule="evenodd" class="xam7olb4z"/><path clip-rule="evenodd" class="wt22uxb8m"/>`,
		"fallback": "qlementine-icons:chevron-smooth-right-16",
	});
}

export default Component;
