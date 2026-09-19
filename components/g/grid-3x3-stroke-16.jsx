import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmbtl7v-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmbtl7v-n"/>`,
		"fallback": "garden:grid-3x3-stroke-16",
	});
}

export default Component;
