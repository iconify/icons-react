import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btn1pnkzi.css';
import '../../css/c/c9jj_-b_j.css';
import '../../css/g/gniowmb9x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btn1pnkzi"/><path class="c9jj_-b_j"/><path class="gniowmb9x"/>`,
		"fallback": "ep:data-board",
	});
}

export default Component;
