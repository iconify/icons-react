import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us80zob-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us80zob-h"/>`,
		"fallback": "bxs:diamond",
	});
}

export default Component;
