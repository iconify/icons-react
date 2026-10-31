import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki9lj6b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki9lj6b9r"/>`,
		"fallback": "coolicons:chart-treemap-round",
	});
}

export default Component;
