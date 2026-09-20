import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-j0n3bur.css';
import '../../css/w/wiiuo4b2r.css';
import '../../css/o/o93m4pe9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-j0n3bur"/><path class="wiiuo4b2r"/><path class="o93m4pe9c"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-browser-image-bold",
	});
}

export default Component;
