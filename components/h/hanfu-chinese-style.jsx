import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/fevrbxbxl.css';
import '../../css/w/w3_775xrs.css';
import '../../css/c/c_ih-jb4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="fevrbxbxl"/><path class="w3_775xrs"/><path class="c_ih-jb4k"/></g>`,
		"fallback": "icon-park:hanfu-chinese-style",
	});
}

export default Component;
