import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od-418bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od-418bos"/>`,
		"fallback": "streamline-logos:deezer-logo",
	});
}

export default Component;
