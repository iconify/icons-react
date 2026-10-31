import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zjlsc5bha.css';
import '../../css/y/yqr7z_rtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k zjlsc5bha"/><path class="wm-a yqr7z_rtq"/></g>`,
		"fallback": "withicons:case-upper-gloss",
	});
}

export default Component;
