import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb91-bjyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb91-bjyb"/>`,
		"fallback": "energy-icons:chevron-left-48-bold",
	});
}

export default Component;
