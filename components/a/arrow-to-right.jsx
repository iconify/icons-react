import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dky4z0bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dky4z0bdl"/>`,
		"fallback": "uil:arrow-to-right",
	});
}

export default Component;
