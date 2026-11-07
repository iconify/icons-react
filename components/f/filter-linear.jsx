import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqrd0s_-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqrd0s_-g"/>`,
		"fallback": "solar:filter-linear",
	});
}

export default Component;
