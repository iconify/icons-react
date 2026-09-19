import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9fo82bvn.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9fo82bvn"/>`,
		"fallback": "el:calendar-sign",
	});
}

export default Component;
