import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcog8lbut.css';
import '../../css/e/el4-lhb4r.css';
import '../../css/w/wxs_kkbru.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bcog8lbut"/><path class="el4-lhb4r"/><path class="wxs_kkbru"/></g>`,
		"fallback": "streamline-color:discussion-converstion-reply",
	});
}

export default Component;
