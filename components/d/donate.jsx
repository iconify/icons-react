import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hj7z5ybgc.css';
import '../../css/w/wcaqembsu.css';
import '../../css/a/aw4ka-b3k.css';
import '../../css/w/wfu7tzb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="hj7z5ybgc"/><path class="wcaqembsu"/><path class="aw4ka-b3k"/><path class="wfu7tzb5f"/></g>`,
		"fallback": "iconoir:donate",
	});
}

export default Component;
