import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj8hq6oxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj8hq6oxr"/>`,
		"fallback": "simple-icons:flashforge",
	});
}

export default Component;
