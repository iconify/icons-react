import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz9iv6bwq.css';
import '../../css/p/pq0jslbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz9iv6bwq"/><path class="pq0jslbzi"/>`,
		"fallback": "boxicons:dock-right-arrow",
	});
}

export default Component;
