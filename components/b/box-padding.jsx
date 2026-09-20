import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv6l8fblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv6l8fblw"/>`,
		"fallback": "tabler:box-padding",
	});
}

export default Component;
