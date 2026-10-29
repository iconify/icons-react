import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zxl4frnwh.css';
import '../../css/y/ysdx0w7ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zxl4frnwh"/><path class="ysdx0w7ne"/></g>`,
		"fallback": "withicons:armchair-sketch",
	});
}

export default Component;
