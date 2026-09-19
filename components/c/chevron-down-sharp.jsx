import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6wy2hb9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6wy2hb9m"/>`,
		"fallback": "ion:chevron-down-sharp",
	});
}

export default Component;
