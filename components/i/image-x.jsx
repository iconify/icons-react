import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl389c8af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl389c8af"/>`,
		"fallback": "noviair-light:image-x",
	});
}

export default Component;
