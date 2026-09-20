import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdau2pj7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdau2pj7h"/>`,
		"fallback": "thesvg-color:airtel",
	});
}

export default Component;
