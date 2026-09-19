import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omvfj0p9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omvfj0p9a"/>`,
		"fallback": "bxs:heart-square",
	});
}

export default Component;
