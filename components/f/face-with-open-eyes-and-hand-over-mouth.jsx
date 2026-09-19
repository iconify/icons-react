import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/j/j31gdzgbk.css';
import '../../css/n/n-yhv1bjy.css';
import '../../css/w/wdphtyb5v.css';
import '../../css/f/fcpnkpbff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="j31gdzgbk"/><path class="n-yhv1bjy"/><path class="wdphtyb5v"/><path class="fcpnkpbff"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-open-eyes-and-hand-over-mouth",
	});
}

export default Component;
