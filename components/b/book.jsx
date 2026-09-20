import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rezp8vb_w.css';
import '../../css/q/qrbbl6bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rezp8vb_w"/><path class="qrbbl6bsk"/></g>`,
		"fallback": "proicons:book",
	});
}

export default Component;
