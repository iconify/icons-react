import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb2gxib2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb2gxib2p"/>`,
		"fallback": "pixel:chevron-down",
	});
}

export default Component;
