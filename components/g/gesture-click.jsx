import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m82ysfb_y.css';
import '../../css/r/r6dfkpbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m82ysfb_y"/><path class="r6dfkpbut"/></g>`,
		"fallback": "tdesign:gesture-click",
	});
}

export default Component;
