import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuz3g9p4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuz3g9p4o"/>`,
		"fallback": "uil:chart-growth",
	});
}

export default Component;
