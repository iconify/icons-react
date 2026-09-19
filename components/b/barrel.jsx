import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_awcdqqm.css';

const viewBox = {"width":833,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_awcdqqm"/>`,
		"fallback": "whh:barrel",
	});
}

export default Component;
