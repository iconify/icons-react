import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cd16omb3q.css';
import '../../css/d/d89ytfbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cd16omb3q"/><path class="d89ytfbsi"/></g>`,
		"fallback": "hugeicons:direction-left-02",
	});
}

export default Component;
