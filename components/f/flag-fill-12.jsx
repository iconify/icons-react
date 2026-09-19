import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2w0dfbzz.css';
import '../../css/x/xjlu6cc0h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2w0dfbzz"/><path class="xjlu6cc0h"/>`,
		"fallback": "garden:flag-fill-12",
	});
}

export default Component;
