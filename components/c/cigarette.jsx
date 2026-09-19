import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4o3fs57g.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4o3fs57g"/>`,
		"fallback": "whh:cigarette",
	});
}

export default Component;
