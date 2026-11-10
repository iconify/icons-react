import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqgd8mbhr.css';
import '../../css/t/thk5b3bcx.css';
import '../../css/x/xtyg9db9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqgd8mbhr"/><path class="thk5b3bcx"/><path class="xtyg9db9j"/></g>`,
		"fallback": "andrsrxn:device-tablet",
	});
}

export default Component;
