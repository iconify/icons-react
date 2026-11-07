import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzryhs1ak.css';
import '../../css/o/on5h-v5us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzryhs1ak"/><path class="on5h-v5us"/>`,
		"fallback": "solar:export-outline",
	});
}

export default Component;
