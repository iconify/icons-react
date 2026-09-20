import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvskmzb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvskmzb3z"/>`,
		"fallback": "mdi:fit-to-screen-outline",
	});
}

export default Component;
