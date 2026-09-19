import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w87z4bc7f.css';
import '../../css/p/ptdwi5b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w87z4bc7f"/><path class="ptdwi5b_x"/></g>`,
		"fallback": "hugeicons:file-input",
	});
}

export default Component;
