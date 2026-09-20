import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtyhb0x5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rtyhb0x5d"/>`,
		"fallback": "nrk:hardware-computer",
	});
}

export default Component;
