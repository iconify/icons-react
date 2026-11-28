import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hh22nib_t.css';
import '../../css/z/zw4p_s46b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hh22nib_t"/><path class="zw4p_s46b"/></g>`,
		"fallback": "iconaut:banana",
	});
}

export default Component;
