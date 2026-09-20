import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouje6tb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouje6tb5r"/>`,
		"fallback": "keyline-icons:bar-chart-horizontal-start-sharp",
	});
}

export default Component;
