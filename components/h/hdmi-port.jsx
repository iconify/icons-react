import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/ju4crf5-e.css';
import '../../css/z/zxr8z_oqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ju4crf5-e"/><path class="zxr8z_oqp"/></g>`,
		"fallback": "iconaut:hdmi-port",
	});
}

export default Component;
