import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf875nbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf875nbdc"/>`,
		"fallback": "mdi:castle",
	});
}

export default Component;
