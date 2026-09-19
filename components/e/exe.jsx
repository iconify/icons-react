import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/z/zc3lmmbma.css';
import '../../css/x/xh1y7dbbu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="zc3lmmbma"/><path class="xh1y7dbbu"/></g>`,
		"fallback": "catppuccin:exe",
	});
}

export default Component;
