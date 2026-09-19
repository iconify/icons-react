import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tmq6s0krk.css';
import '../../css/d/dzn15qbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tmq6s0krk"/><path class="dzn15qbva"/></g>`,
		"fallback": "hugeicons:file-headphone",
	});
}

export default Component;
