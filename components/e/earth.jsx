import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbd_2berd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbd_2berd"/>`,
		"fallback": "pixelarticons:earth",
	});
}

export default Component;
