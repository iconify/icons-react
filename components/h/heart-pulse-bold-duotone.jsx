import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-_innbce.css';
import '../../css/k/khl7ijbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-_innbce"/><path class="khl7ijbbn"/>`,
		"fallback": "solar:heart-pulse-bold-duotone",
	});
}

export default Component;
