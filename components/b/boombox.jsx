import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw74o5bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw74o5bvp"/>`,
		"fallback": "uil:boombox",
	});
}

export default Component;
