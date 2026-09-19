import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq_3h82mi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq_3h82mi"/>`,
		"fallback": "ion:android-hangout",
	});
}

export default Component;
