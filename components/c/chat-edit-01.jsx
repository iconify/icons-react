import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4xvteg8u.css';
import '../../css/d/d5x0q1xds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m4xvteg8u"/><path class="d5x0q1xds"/></g>`,
		"fallback": "hugeicons:chat-edit-01",
	});
}

export default Component;
