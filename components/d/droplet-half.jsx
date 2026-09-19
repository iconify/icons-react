import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4n53p-eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4n53p-eg"/>`,
		"fallback": "bxs:droplet-half",
	});
}

export default Component;
