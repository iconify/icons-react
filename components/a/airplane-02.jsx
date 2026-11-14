import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hbg6tp-rw.css';
import '../../css/a/alt5x2byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hbg6tp-rw"/><path class="alt5x2byx"/></g>`,
		"fallback": "hugeicons:airplane-02",
	});
}

export default Component;
