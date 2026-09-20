import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro7masbhg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ro7masbhg"/>`,
		"fallback": "streamline:airport-security-remix",
	});
}

export default Component;
