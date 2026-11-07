import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9f2r2p1o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w9f2r2p1o"/>`,
		"fallback": "sidekickicons:cc-20-solid",
	});
}

export default Component;
