import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cv_1w0b6t.css';
import '../../css/u/ut7zb1joq.css';
import '../../css/o/o81lhh3cp.css';
import '../../css/m/mqe1p62tz.css';
import '../../css/h/hx43v7bjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cv_1w0b6t"/><path class="ut7zb1joq"/><path class="o81lhh3cp"/><path class="mqe1p62tz"/><path class="hx43v7bjo"/></g>`,
		"fallback": "fluent-emoji-flat:eye",
	});
}

export default Component;
