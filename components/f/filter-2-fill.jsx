import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnosb5bey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnosb5bey"/>`,
		"fallback": "ri:filter-2-fill",
	});
}

export default Component;
