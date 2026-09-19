import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xmulznhph.css';
import '../../css/h/h-hrcfb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xmulznhph"/><path class="h-hrcfb_r"/></g>`,
		"fallback": "hugeicons:file-unknown",
	});
}

export default Component;
