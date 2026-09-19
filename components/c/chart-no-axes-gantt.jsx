import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isrno4bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isrno4bnc"/>`,
		"fallback": "hugeicons:chart-no-axes-gantt",
	});
}

export default Component;
