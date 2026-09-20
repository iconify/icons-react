import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbuj5abca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbuj5abca"/>`,
		"fallback": "solar:arrow-to-top-left-broken",
	});
}

export default Component;
