import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/toja6ircy.css';
import '../../css/d/dff-7ub2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="toja6ircy"/><path class="dff-7ub2u"/></g>`,
		"fallback": "hugeicons:ai-image-edit",
	});
}

export default Component;
