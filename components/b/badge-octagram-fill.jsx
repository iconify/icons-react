import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un28y8tbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un28y8tbc"/>`,
		"fallback": "mingcute:badge-octagram-fill",
	});
}

export default Component;
