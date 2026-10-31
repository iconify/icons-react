import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcs2ixboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcs2ixboi"/>`,
		"fallback": "coolicons:headset-round",
	});
}

export default Component;
