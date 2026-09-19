import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_l8o78eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_l8o78eb"/>`,
		"fallback": "iconoir:diameter",
	});
}

export default Component;
