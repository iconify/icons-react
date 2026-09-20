import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inbigl9gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inbigl9gc"/>`,
		"fallback": "uil:cloud-showers",
	});
}

export default Component;
