import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj1pmedun.css';
import '../../css/n/nuy3iacup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj1pmedun"/><path class="nuy3iacup"/>`,
		"fallback": "streamline-ultimate:disability-parking-bold",
	});
}

export default Component;
