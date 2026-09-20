import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcm2m96rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcm2m96rd"/>`,
		"fallback": "mdi:info-symbol",
	});
}

export default Component;
