import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ccv5dxm4g.css';
import '../../css/b/bgqph-7hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ccv5dxm4g"/><path class="bgqph-7hs"/></g>`,
		"fallback": "hugeicons:cursor-move-01",
	});
}

export default Component;
