import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4spp6b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4spp6b6d"/>`,
		"fallback": "thesvg-color:geocaching",
	});
}

export default Component;
