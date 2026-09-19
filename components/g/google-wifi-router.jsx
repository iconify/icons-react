import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj2fl5b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj2fl5b5k"/>`,
		"fallback": "cbi:google-wifi-router",
	});
}

export default Component;
