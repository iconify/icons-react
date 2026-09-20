import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pueh8h4nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pueh8h4nz"/>`,
		"fallback": "solar:dumbbell-broken",
	});
}

export default Component;
