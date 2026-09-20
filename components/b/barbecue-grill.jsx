import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5f7jkg_i.css';
import '../../css/v/v1rrmab1b.css';
import '../../css/y/yzuc4-9_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5f7jkg_i"/><path class="v1rrmab1b"/><path class="yzuc4-9_t"/></g>`,
		"fallback": "streamline-ultimate-color:barbecue-grill",
	});
}

export default Component;
