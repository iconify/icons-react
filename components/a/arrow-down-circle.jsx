import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub6xj4edc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub6xj4edc"/>`,
		"fallback": "tabler:arrow-down-circle",
	});
}

export default Component;
