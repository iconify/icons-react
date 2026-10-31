import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v93_pmbkz.css';
import '../../css/x/xo5jlbt9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v93_pmbkz wm-k"/><path class="wm-a xo5jlbt9f"/></g>`,
		"fallback": "withicons:hand-coins-gloss",
	});
}

export default Component;
