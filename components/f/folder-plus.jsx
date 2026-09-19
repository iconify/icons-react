import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgqucl06k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgqucl06k"/>`,
		"fallback": "fa6-solid:folder-plus",
	});
}

export default Component;
