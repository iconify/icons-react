import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idga7wb7r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idga7wb7r"/>`,
		"fallback": "carbon:gas-station-eco",
	});
}

export default Component;
