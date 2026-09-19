import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2uqss_ff.css';
import '../../css/j/jv5ybobvd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o2uqss_ff"/><path class="jv5ybobvd"/></g>`,
		"fallback": "glyphs:align-center-outline",
	});
}

export default Component;
