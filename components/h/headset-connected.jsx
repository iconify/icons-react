import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s5av_5byu.css';
import '../../css/c/cxod47puq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s5av_5byu"/><path class="cxod47puq"/></g>`,
		"fallback": "hugeicons:headset-connected",
	});
}

export default Component;
