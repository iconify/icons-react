import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp25m2b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp25m2b2d"/>`,
		"fallback": "tabler:circle-letter-f-filled",
	});
}

export default Component;
