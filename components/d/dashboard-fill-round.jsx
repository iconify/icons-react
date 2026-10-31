import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmcmv3y4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmcmv3y4h"/>`,
		"fallback": "coolicons:dashboard-fill-round",
	});
}

export default Component;
