import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg85dnbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg85dnbek"/>`,
		"fallback": "mdi:data-matrix-scan",
	});
}

export default Component;
