import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm_dlq0xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm_dlq0xv"/>`,
		"fallback": "cbi:arlo-video-doorbell",
	});
}

export default Component;
