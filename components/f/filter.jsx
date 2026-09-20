import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raf3v2b9y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raf3v2b9y"/>`,
		"fallback": "uiw:filter",
	});
}

export default Component;
