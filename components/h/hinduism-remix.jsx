import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2q2b_7gn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i2q2b_7gn"/>`,
		"fallback": "streamline:hinduism-remix",
	});
}

export default Component;
