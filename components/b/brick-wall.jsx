import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irhi5ow4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irhi5ow4x"/>`,
		"fallback": "keyline-icons:brick-wall",
	});
}

export default Component;
