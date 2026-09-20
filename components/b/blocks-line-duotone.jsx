import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z76hllbql.css';
import '../../css/w/wzzi_ybwn.css';
import '../../css/c/cl5hu-x1l.css';
import '../../css/z/zjt4gb9yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z76hllbql"/><path class="wzzi_ybwn"/><path class="cl5hu-x1l"/><path class="zjt4gb9yw"/></g>`,
		"fallback": "solar:blocks-line-duotone",
	});
}

export default Component;
