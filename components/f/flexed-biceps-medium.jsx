import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o01wy_b6p.css';
import '../../css/v/vb3wlmbxw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o01wy_b6p"/><path class="vb3wlmbxw"/></g>`,
		"fallback": "fluent-emoji-flat:flexed-biceps-medium",
	});
}

export default Component;
