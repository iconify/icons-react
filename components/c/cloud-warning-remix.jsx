import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbw8hbcnt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vbw8hbcnt"/>`,
		"fallback": "streamline:cloud-warning-remix",
	});
}

export default Component;
