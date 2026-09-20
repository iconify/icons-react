import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg6fhmlef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg6fhmlef"/>`,
		"fallback": "uil:filter-slash",
	});
}

export default Component;
