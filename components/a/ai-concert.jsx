import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d_q81acmi.css';
import '../../css/x/xykmkmb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d_q81acmi"/><path class="xykmkmb9d"/></g>`,
		"fallback": "hugeicons:ai-concert",
	});
}

export default Component;
