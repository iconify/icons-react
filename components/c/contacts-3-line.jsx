import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc4pz-6xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc4pz-6xi"/>`,
		"fallback": "mingcute:contacts-3-line",
	});
}

export default Component;
