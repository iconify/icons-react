import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdk74lbhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdk74lbhq"/>`,
		"fallback": "ion:bookmark",
	});
}

export default Component;
