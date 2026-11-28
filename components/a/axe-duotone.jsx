import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/he8e0gbcb.css';
import '../../css/t/tz-jxcbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="he8e0gbcb secondary"/><path class="primary tz-jxcbpf"/></g>`,
		"fallback": "iconaut:axe-duotone",
	});
}

export default Component;
