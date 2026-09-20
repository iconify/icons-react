import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yasv75-0z.css';
import '../../css/l/lommj4luf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yasv75-0z"/><path class="lommj4luf"/>`,
		"fallback": "material-icon-theme:folder-batch-open",
	});
}

export default Component;
