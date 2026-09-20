import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwdn4qbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwdn4qbng"/>`,
		"fallback": "mdi:fruit-cherries-off",
	});
}

export default Component;
