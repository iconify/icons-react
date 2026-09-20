import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlht_y30p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlht_y30p"/>`,
		"fallback": "typcn:camera",
	});
}

export default Component;
