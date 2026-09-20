import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfsvjbgyy.css';
import '../../css/m/mjaimm-ui.css';
import '../../css/x/x2-3lfqme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dfsvjbgyy"/><path class="mjaimm-ui"/><path class="x2-3lfqme"/></g>`,
		"fallback": "tdesign:flag-1",
	});
}

export default Component;
