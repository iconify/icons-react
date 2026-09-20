import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7pfnoh_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7pfnoh_z"/>`,
		"fallback": "streamline-ultimate:begging-hand-coin-2-bold",
	});
}

export default Component;
