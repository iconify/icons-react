import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bkpq_fbrv.css';
import '../../css/h/h9we6-6yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bkpq_fbrv"/><path class="h9we6-6yh"/></g>`,
		"fallback": "hugeicons:file-favourite",
	});
}

export default Component;
