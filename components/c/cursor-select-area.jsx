import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulcx3bc8c.css';
import '../../css/v/vv8vi8b-x.css';
import '../../css/x/xmtft0nnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ulcx3bc8c"/><path class="vv8vi8b-x"/><path class="xmtft0nnn"/></g>`,
		"fallback": "streamline-cyber-color:cursor-select-area",
	});
}

export default Component;
