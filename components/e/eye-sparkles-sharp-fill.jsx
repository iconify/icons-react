import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/j7-oa0fhr.css';
import '../../css/x/xwxdw8hle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="j7-oa0fhr"/><path class="xwxdw8hle"/></g>`,
		"fallback": "keyline-icons:eye-sparkles-sharp-fill",
	});
}

export default Component;
