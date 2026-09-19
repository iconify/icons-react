import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y4wpcei-y.css';
import '../../css/v/vb74khbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y4wpcei-y"/><path class="vb74khbao"/></g>`,
		"fallback": "hugeicons:castle-01",
	});
}

export default Component;
