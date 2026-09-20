import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tl1gbxbmv.css';
import '../../css/j/j6dt124gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tl1gbxbmv"/><path class="j6dt124gf"/></g>`,
		"fallback": "streamline-ultimate:chromium",
	});
}

export default Component;
