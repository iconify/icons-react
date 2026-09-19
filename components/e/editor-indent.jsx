import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jso90vbkn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jso90vbkn"/>`,
		"fallback": "dashicons:editor-indent",
	});
}

export default Component;
