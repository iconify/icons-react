import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prxt3uguk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="prxt3uguk"/>`,
		"fallback": "streamline:insert-top-right-solid",
	});
}

export default Component;
