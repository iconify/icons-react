import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu6f67tyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu6f67tyx"/>`,
		"fallback": "mdi:card-remove",
	});
}

export default Component;
