import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrk17h_3f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrk17h_3f"/>`,
		"fallback": "streamline:chat-bubble-text-square",
	});
}

export default Component;
