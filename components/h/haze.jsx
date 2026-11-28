import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v4enu2byu.css';
import '../../css/x/xfodf0u2y.css';
import '../../css/p/p0kg29bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v4enu2byu"/><path class="xfodf0u2y"/><path class="p0kg29bkn"/></g>`,
		"fallback": "iconaut:haze",
	});
}

export default Component;
