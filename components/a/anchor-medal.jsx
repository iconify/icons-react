import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbvpz2owh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbvpz2owh"/>`,
		"fallback": "temaki:anchor-medal",
	});
}

export default Component;
