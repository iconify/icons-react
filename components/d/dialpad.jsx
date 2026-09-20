import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri5cv0bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri5cv0bpa"/>`,
		"fallback": "uil:dialpad",
	});
}

export default Component;
