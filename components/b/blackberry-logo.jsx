import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m31oa8una.css';
import '../../css/j/jk78v9bui.css';
import '../../css/t/t94nmlqoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m31oa8una"/><path class="jk78v9bui"/><path class="t94nmlqoa"/></g>`,
		"fallback": "streamline-ultimate-color:blackberry-logo",
	});
}

export default Component;
