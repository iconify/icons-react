import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3_o6v0vp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3_o6v0vp"/>`,
		"fallback": "ion:android-more-horizontal",
	});
}

export default Component;
