import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-z20k46c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-z20k46c"/>`,
		"fallback": "streamline-logos:facebook-logo-2",
	});
}

export default Component;
