import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhe_009zr.css';
import '../../css/j/jvk8qniua.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vhe_009zr"/><path clip-rule="evenodd" class="jvk8qniua"/></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-down-light",
	});
}

export default Component;
