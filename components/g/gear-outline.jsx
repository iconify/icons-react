import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgqr2umbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgqr2umbg"/>`,
		"fallback": "mdi:gear-outline",
	});
}

export default Component;
