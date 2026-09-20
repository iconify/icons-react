import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k12xm9bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k12xm9bhl"/>`,
		"fallback": "mdi:credit-card-scan",
	});
}

export default Component;
