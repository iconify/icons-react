import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wx29rqbal.css';
import '../../css/i/i6fz_qzxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wx29rqbal"/><path class="i6fz_qzxz"/></g>`,
		"fallback": "iconoir:figma",
	});
}

export default Component;
