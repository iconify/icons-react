import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw0842bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw0842bct"/>`,
		"fallback": "coolicons:face-laugh-fill-round",
	});
}

export default Component;
