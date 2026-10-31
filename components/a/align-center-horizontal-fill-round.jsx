import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syxkevg3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syxkevg3z"/>`,
		"fallback": "coolicons:align-center-horizontal-fill-round",
	});
}

export default Component;
