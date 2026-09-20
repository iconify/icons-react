import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zmkr8v2fi.css';
import '../../css/z/ztsrdlk1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zmkr8v2fi"/><path clip-rule="evenodd" class="ztsrdlk1a"/></g>`,
		"fallback": "streamline-sharp-color:hot-spring-flat",
	});
}

export default Component;
