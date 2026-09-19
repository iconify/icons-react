import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4si8guta.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4si8guta"/>`,
		"fallback": "fa:connectdevelop",
	});
}

export default Component;
