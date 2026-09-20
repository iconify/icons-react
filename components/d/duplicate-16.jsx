import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihtyuhbtb.css';
import '../../css/b/bqil3cc3l.css';
import '../../css/s/svp354b9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihtyuhbtb"/><path clip-rule="evenodd" class="bqil3cc3l"/><path class="svp354b9v"/>`,
		"fallback": "qlementine-icons:duplicate-16",
	});
}

export default Component;
