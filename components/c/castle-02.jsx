import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o9s6x0bdf.css';
import '../../css/x/xia90ebaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o9s6x0bdf"/><path class="xia90ebaa"/></g>`,
		"fallback": "hugeicons:castle-02",
	});
}

export default Component;
