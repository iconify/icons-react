import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2p9e0byd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2p9e0byd"/>`,
		"fallback": "streamline:camping-tent-solid",
	});
}

export default Component;
