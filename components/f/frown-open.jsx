import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yys93tb4a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yys93tb4a"/>`,
		"fallback": "fa7-solid:frown-open",
	});
}

export default Component;
