import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vgo9wxbsq.css';
import '../../css/q/q901sdz5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vgo9wxbsq"/><path class="q901sdz5y"/></g>`,
		"fallback": "hugeicons:archive-03",
	});
}

export default Component;
