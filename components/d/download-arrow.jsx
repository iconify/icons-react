import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/danlpbcqj.css';
import '../../css/h/hihig_9uh.css';
import '../../css/w/wxpwqmb4l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="danlpbcqj"/><path class="hihig_9uh"/><path class="wxpwqmb4l"/></g>`,
		"fallback": "streamline-flex-color:download-arrow",
	});
}

export default Component;
