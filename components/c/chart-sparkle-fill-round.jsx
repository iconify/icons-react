import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou-4ttbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou-4ttbdx"/>`,
		"fallback": "coolicons:chart-sparkle-fill-round",
	});
}

export default Component;
