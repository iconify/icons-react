import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu00uja8e.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu00uja8e"/>`,
		"fallback": "fa6-solid:champagne-glasses",
	});
}

export default Component;
