import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou43rhu8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou43rhu8c"/>`,
		"fallback": "streamline-ultimate:arrow-down-2-bold",
	});
}

export default Component;
