import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/truf0sx-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="truf0sx-o"/>`,
		"fallback": "typcn:chart-pie-outline",
	});
}

export default Component;
