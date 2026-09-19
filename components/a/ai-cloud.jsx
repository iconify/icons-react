import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/u6k_ooqbe.css';
import '../../css/g/g2qv1gm9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="u6k_ooqbe"/><path class="g2qv1gm9z"/></g>`,
		"fallback": "hugeicons:ai-cloud",
	});
}

export default Component;
