import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4z4cgbwk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x4z4cgbwk"/>`,
		"fallback": "streamline:graph-bar-decrease-solid",
	});
}

export default Component;
