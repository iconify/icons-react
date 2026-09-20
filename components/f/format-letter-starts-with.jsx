import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzj21sb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzj21sb8r"/>`,
		"fallback": "mdi:format-letter-starts-with",
	});
}

export default Component;
