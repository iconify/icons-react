import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osd8-xbdl.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osd8-xbdl"/>`,
		"fallback": "zmdi:camera-monochrome-photos",
	});
}

export default Component;
