import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ufcnjp-rr.css';
import '../../css/b/bcexqtb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ufcnjp-rr"/><path class="bcexqtb2l"/></g>`,
		"fallback": "hugeicons:arrow-reload-horizontal",
	});
}

export default Component;
