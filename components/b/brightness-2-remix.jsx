import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7ql-2g6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7ql-2g6j"/>`,
		"fallback": "streamline:brightness-2-remix",
	});
}

export default Component;
