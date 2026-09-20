import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz7_i0dqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz7_i0dqi"/>`,
		"fallback": "ri:dashboard-horizontal-fill",
	});
}

export default Component;
