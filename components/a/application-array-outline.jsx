import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzn2au2sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzn2au2sx"/>`,
		"fallback": "mdi:application-array-outline",
	});
}

export default Component;
