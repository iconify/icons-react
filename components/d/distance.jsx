import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cespfdc7o.css';
import '../../css/y/ywyedej2p.css';
import '../../css/h/hztvveiae.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cespfdc7o"/><path class="ywyedej2p"/><path class="hztvveiae"/></g>`,
		"fallback": "at-icons:distance",
	});
}

export default Component;
