import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/ngswk3bei.css';
import '../../css/b/bweogcbns.css';
import '../../css/w/w-j1gt0db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ngswk3bei"/><path class="bweogcbns"/><path class="w-j1gt0db"/></g>`,
		"fallback": "hugeicons:clip",
	});
}

export default Component;
