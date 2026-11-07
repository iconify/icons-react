import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waxeanb4e.css';
import '../../css/m/mgns90b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waxeanb4e"/><path class="mgns90b-d"/>`,
		"fallback": "solar:exclamation-mark-bold-duotone",
	});
}

export default Component;
