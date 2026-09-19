import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqwrgzbpx.css';

const viewBox = {"width":737,"height":646};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqwrgzbpx"/>`,
		"fallback": "ls:camera",
	});
}

export default Component;
