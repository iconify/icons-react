import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsyc3nk8h.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsyc3nk8h"/>`,
		"fallback": "jam:infinite",
	});
}

export default Component;
