import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2lg_hbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2lg_hbwe"/>`,
		"fallback": "mdi:bookmark-remove",
	});
}

export default Component;
