import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt96enbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt96enbkk"/>`,
		"fallback": "mdi:hq",
	});
}

export default Component;
