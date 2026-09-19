import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie17f1jot.css';
import '../../css/v/vrn1zheyn.css';
import '../../css/x/x0cd9vbfb.css';
import '../../css/r/r4o8ayb-l.css';
import '../../css/h/h2a0adbig.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ie17f1jot"/><path class="vrn1zheyn"/><path class="x0cd9vbfb"/><path class="r4o8ayb-l"/><path class="h2a0adbig"/></g>`,
		"fallback": "fluent-emoji-flat:1st-place-medal",
	});
}

export default Component;
