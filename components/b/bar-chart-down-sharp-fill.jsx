import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2n4w53sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2n4w53sl"/>`,
		"fallback": "keyline-icons:bar-chart-down-sharp-fill",
	});
}

export default Component;
