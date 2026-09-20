import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxiozebjt.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxiozebjt"/>`,
		"fallback": "lineicons:bookmark-1",
	});
}

export default Component;
