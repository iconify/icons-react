import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb8c3rbaa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pb8c3rbaa"/>`,
		"fallback": "streamline:ear-hearing-remix",
	});
}

export default Component;
