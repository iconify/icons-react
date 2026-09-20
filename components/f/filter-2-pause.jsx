import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyqe-6bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyqe-6bcy"/>`,
		"fallback": "tabler:filter-2-pause",
	});
}

export default Component;
