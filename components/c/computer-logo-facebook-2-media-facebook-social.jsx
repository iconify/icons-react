import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikz5sacwd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikz5sacwd"/>`,
		"fallback": "streamline:computer-logo-facebook-2-media-facebook-social",
	});
}

export default Component;
