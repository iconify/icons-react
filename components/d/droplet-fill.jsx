import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am1po-b2u.css';

const viewBox = {"width":24,"height":24,"left":0.1,"top":0.1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am1po-b2u"/>`,
		"fallback": "eva:droplet-fill",
	});
}

export default Component;
