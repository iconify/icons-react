import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmqp0_b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mmqp0_b3c"/>`,
		"fallback": "streamline-logos:amazon-prime-video-logo-1-block",
	});
}

export default Component;
