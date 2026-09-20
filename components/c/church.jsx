import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvyrs3l7w.css';
import '../../css/z/zblh9ubrd.css';
import '../../css/y/y2xgks76o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvyrs3l7w"/><path class="zblh9ubrd"/><path class="y2xgks76o"/></g>`,
		"fallback": "tdesign:church",
	});
}

export default Component;
