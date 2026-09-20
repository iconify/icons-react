import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi9gqvjwc.css';
import '../../css/o/ohm0zoruo.css';
import '../../css/m/ma09lhbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mi9gqvjwc"/><path class="ohm0zoruo"/><path class="ma09lhbyo"/></g>`,
		"fallback": "tdesign:drink",
	});
}

export default Component;
