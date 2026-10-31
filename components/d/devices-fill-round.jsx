import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udd7sr0oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udd7sr0oi"/>`,
		"fallback": "coolicons:devices-fill-round",
	});
}

export default Component;
