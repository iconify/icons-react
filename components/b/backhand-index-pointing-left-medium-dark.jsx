import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgknlpbuh.css';
import '../../css/l/l7wm07fjl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vgknlpbuh"/><path class="l7wm07fjl"/></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-left-medium-dark",
	});
}

export default Component;
