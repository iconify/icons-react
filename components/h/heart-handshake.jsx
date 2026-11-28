import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ekf8t7boi.css';
import '../../css/j/jmgrsengl.css';
import '../../css/y/y09vs8_da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ekf8t7boi"/><path class="jmgrsengl"/><path class="y09vs8_da"/></g>`,
		"fallback": "iconaut:heart-handshake",
	});
}

export default Component;
