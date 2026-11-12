import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/img8m6dpu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="img8m6dpu"/>`,
		"fallback": "selfhst:immich-kiosk-light",
	});
}

export default Component;
