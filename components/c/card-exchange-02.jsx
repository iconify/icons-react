import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3u21xbte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3u21xbte"/>`,
		"fallback": "hugeicons:card-exchange-02",
	});
}

export default Component;
