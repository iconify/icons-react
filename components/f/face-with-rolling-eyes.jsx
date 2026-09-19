import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/m/m33shdb9y.css';
import '../../css/l/lcw7mhbti.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="m33shdb9y"/><path class="lcw7mhbti"/></g>`,
		"fallback": "fluent-emoji-flat:face-with-rolling-eyes",
	});
}

export default Component;
