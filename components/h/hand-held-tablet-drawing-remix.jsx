import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpw9e4bba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lpw9e4bba"/>`,
		"fallback": "streamline:hand-held-tablet-drawing-remix",
	});
}

export default Component;
