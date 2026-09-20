import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5clbybwu.css';
import '../../css/s/svtizv3vy.css';
import '../../css/l/l-57p0bbd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5clbybwu"/><path clip-rule="evenodd" class="svtizv3vy"/><path class="l-57p0bbd"/>`,
		"fallback": "qlementine-icons:credit-card-crossed-16",
	});
}

export default Component;
