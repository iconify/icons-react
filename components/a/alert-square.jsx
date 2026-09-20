import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp7fi6bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp7fi6bri"/>`,
		"fallback": "tabler:alert-square",
	});
}

export default Component;
