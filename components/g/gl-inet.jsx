import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7txlobxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7txlobxu"/>`,
		"fallback": "selfhst:gl-inet",
	});
}

export default Component;
