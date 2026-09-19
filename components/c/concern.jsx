import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lt9927b3v.css';
import '../../css/x/x39rpxbik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="lt9927b3v"/><path class="x39rpxbik"/></g>`,
		"fallback": "icon-park-solid:concern",
	});
}

export default Component;
