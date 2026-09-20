import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dr-k5hb4l.css';
import '../../css/t/tgh3kdyuv.css';
import '../../css/x/xi84ow41q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dr-k5hb4l"/><path class="tgh3kdyuv"/><path class="xi84ow41q"/></g>`,
		"fallback": "streamline-ultimate:drawer-envelope",
	});
}

export default Component;
