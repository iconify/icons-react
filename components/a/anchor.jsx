import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weezcebac.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weezcebac"/>`,
		"fallback": "fa7-solid:anchor",
	});
}

export default Component;
