import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3num9tcq.css';
import '../../css/o/o3qegkbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3num9tcq"/><path class="o3qegkbvd"/>`,
		"fallback": "streamline-ultimate:athletics-javelin-throwing-bold",
	});
}

export default Component;
