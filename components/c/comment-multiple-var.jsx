import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sjsy5hbvt.css';
import '../../css/z/zdxa1wbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sjsy5hbvt"/><path class="zdxa1wbga"/></g>`,
		"fallback": "proicons:comment-multiple-var",
	});
}

export default Component;
