import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dq6itviwo.css';
import '../../css/a/asqt_cxpy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dq6itviwo"/><path class="asqt_cxpy"/></g>`,
		"fallback": "fluent-emoji-flat:call-me-hand",
	});
}

export default Component;
