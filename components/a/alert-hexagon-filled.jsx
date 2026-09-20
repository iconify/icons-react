import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azqc4mbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azqc4mbvh"/>`,
		"fallback": "tabler:alert-hexagon-filled",
	});
}

export default Component;
