import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyno9_3-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyno9_3-p"/>`,
		"fallback": "coolicons:chart-gantt-duotone-round",
	});
}

export default Component;
