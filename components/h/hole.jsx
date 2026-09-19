import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vb8q3h42l.css';
import '../../css/g/g2byczbyr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vb8q3h42l"/><path class="g2byczbyr"/></g>`,
		"fallback": "fluent-emoji-flat:hole",
	});
}

export default Component;
