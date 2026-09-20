import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inf7f8bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inf7f8bsf"/>`,
		"fallback": "keyline-icons:bell-plus-sharp",
	});
}

export default Component;
