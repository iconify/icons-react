import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av_zmzb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av_zmzb8x"/>`,
		"fallback": "mdi:email-receive-outline",
	});
}

export default Component;
