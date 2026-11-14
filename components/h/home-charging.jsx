import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w23k9ifmr.css';
import '../../css/z/zx2u6rbqg.css';
import '../../css/i/ivqiy5bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w23k9ifmr"/><path class="zx2u6rbqg"/><path class="ivqiy5bdm"/></g>`,
		"fallback": "evicons:home-charging",
	});
}

export default Component;
