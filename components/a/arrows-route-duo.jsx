import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qyaox7bmr.css';
import '../../css/r/rqypzxbns.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qyaox7bmr"/><path class="rqypzxbns"/></g>`,
		"fallback": "glyphs:arrows-route-duo",
	});
}

export default Component;
