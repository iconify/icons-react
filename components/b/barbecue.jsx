import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3rsxqbbk.css';
import '../../css/s/s8sunfb9g.css';
import '../../css/w/wvk0rh36i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y3rsxqbbk"/><path class="s8sunfb9g"/><path class="wvk0rh36i"/></g>`,
		"fallback": "tdesign:barbecue",
	});
}

export default Component;
