import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_mbj4-zo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_mbj4-zo"/>`,
		"fallback": "streamline:button-pause-2-remix",
	});
}

export default Component;
