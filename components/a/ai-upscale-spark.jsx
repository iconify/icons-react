import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc4a9obbw.css';
import '../../css/d/d-df64e0v.css';
import '../../css/y/ypm59qbfb.css';
import '../../css/p/pl23blbgj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hc4a9obbw"/><path class="d-df64e0v"/><path class="ypm59qbfb"/><path class="pl23blbgj"/></g>`,
		"fallback": "streamline-color:ai-upscale-spark",
	});
}

export default Component;
