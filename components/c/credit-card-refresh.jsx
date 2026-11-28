import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzki34brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzki34brp"/>`,
		"fallback": "noviair-light:credit-card-refresh",
	});
}

export default Component;
