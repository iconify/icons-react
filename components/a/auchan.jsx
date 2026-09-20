import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxpn3x-hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxpn3x-hs"/>`,
		"fallback": "thesvg-color:auchan",
	});
}

export default Component;
