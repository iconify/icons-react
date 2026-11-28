import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcql0kbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcql0kbht"/>`,
		"fallback": "noviair-light:card-diamond",
	});
}

export default Component;
