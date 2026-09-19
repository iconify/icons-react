import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g-5fe2a3l.css';
import '../../css/l/lgszabjvu.css';
import '../../css/e/e1h8zkb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g-5fe2a3l"/><path class="lgszabjvu"/><path class="e1h8zkb4s"/></g>`,
		"fallback": "hugeicons:delivery-tracking-02",
	});
}

export default Component;
