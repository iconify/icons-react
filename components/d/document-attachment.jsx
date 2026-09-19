import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lansq9-ym.css';
import '../../css/j/jvg7j_b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lansq9-ym"/><path class="jvg7j_b2d"/></g>`,
		"fallback": "hugeicons:document-attachment",
	});
}

export default Component;
