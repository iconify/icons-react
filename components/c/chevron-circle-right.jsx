import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igjbv8bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igjbv8bsk"/>`,
		"fallback": "noviair:chevron-circle-right",
	});
}

export default Component;
