import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt7kltbjs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt7kltbjs"/>`,
		"fallback": "fa7-solid:grin-wink",
	});
}

export default Component;
