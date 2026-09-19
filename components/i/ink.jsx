import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss8d_8bwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss8d_8bwm"/>`,
		"fallback": "file-icons:ink",
	});
}

export default Component;
