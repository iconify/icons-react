import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krpq4dddo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krpq4dddo"/>`,
		"fallback": "mdi:face-retouching-natural-woman-outline",
	});
}

export default Component;
