import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pd5v96lzw.css';
import '../../css/y/yopadjb1x.css';
import '../../css/j/jsn7psb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pd5v96lzw"/><circle class="yopadjb1x"/><path class="jsn7psb-j"/></g>`,
		"fallback": "hugeicons:image-03",
	});
}

export default Component;
