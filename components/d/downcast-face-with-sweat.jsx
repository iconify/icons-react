import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/o/o2vbssb_t.css';
import '../../css/o/o7ucgkaxs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="o2vbssb_t"/><path class="o7ucgkaxs"/></g>`,
		"fallback": "fluent-emoji-flat:downcast-face-with-sweat",
	});
}

export default Component;
