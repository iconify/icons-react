import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro4-8abks.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ro4-8abks"/>`,
		"fallback": "streamline:ice-cream-3-remix",
	});
}

export default Component;
