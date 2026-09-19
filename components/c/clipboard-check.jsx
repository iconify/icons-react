import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa14hnb-c.css';
import '../../css/b/benlxfbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa14hnb-c"/><path class="benlxfbfy"/>`,
		"fallback": "boxicons:clipboard-check",
	});
}

export default Component;
