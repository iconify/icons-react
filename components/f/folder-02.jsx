import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fn1lflbar.css';
import '../../css/h/hq8mhmbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="fn1lflbar"/><path class="hq8mhmbjq"/></g>`,
		"fallback": "hugeicons:folder-02",
	});
}

export default Component;
