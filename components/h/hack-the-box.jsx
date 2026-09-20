import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm59pb2yx.css';

const viewBox = {"width":1024,"height":791.27};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm59pb2yx"/>`,
		"fallback": "thesvg-color:hack-the-box",
	});
}

export default Component;
