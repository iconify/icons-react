import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiufbeg5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiufbeg5l"/>`,
		"fallback": "mdi:arrange-bring-to-front",
	});
}

export default Component;
