import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc_2e-b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc_2e-b9z"/>`,
		"fallback": "cbi:7plus-tv",
	});
}

export default Component;
