import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq8wm8bub.css';
import '../../css/m/mryp9vb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq8wm8bub"/><path class="mryp9vb1d"/>`,
		"fallback": "streamline-ultimate:corporate-social-media-bold",
	});
}

export default Component;
