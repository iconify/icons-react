import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rltfo1biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rltfo1biv"/>`,
		"fallback": "lucide:arrows-from-axis-horizontal",
	});
}

export default Component;
