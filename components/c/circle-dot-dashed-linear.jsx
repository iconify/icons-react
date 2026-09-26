import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bp0w6acmm.css';
import '../../css/k/kfn71cctn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bp0w6acmm"/><path class="kfn71cctn"/></g>`,
		"fallback": "solar:circle-dot-dashed-linear",
	});
}

export default Component;
