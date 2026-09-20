import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g01t5fb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g01t5fb_b"/>`,
		"fallback": "streamline-logos:amd-logo",
	});
}

export default Component;
