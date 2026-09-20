import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn-4l5o8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn-4l5o8k"/>`,
		"fallback": "reicon:angle-left-filled",
	});
}

export default Component;
