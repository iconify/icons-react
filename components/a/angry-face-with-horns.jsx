import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeupqovvp.css';
import '../../css/m/mij18mb7i.css';
import '../../css/v/vptk__bpz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qeupqovvp"/><path class="mij18mb7i"/><path class="vptk__bpz"/></g>`,
		"fallback": "fluent-emoji-flat:angry-face-with-horns",
	});
}

export default Component;
