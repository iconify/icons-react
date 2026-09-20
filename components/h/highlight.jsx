import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhrf8sb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhrf8sb2p"/>`,
		"fallback": "pixel:highlight",
	});
}

export default Component;
