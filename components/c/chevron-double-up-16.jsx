import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnzp6-gsx.css';
import '../../css/w/wl3st4cag.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pnzp6-gsx"/><path clip-rule="evenodd" class="wl3st4cag"/>`,
		"fallback": "qlementine-icons:chevron-double-up-16",
	});
}

export default Component;
