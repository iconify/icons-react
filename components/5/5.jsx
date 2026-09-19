import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbxhxk3ph.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbxhxk3ph"/>`,
		"fallback": "fa7-solid:5",
	});
}

export default Component;
