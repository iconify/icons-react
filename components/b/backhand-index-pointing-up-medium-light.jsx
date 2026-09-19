import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixwxc1b2r.css';
import '../../css/y/ygh_macxy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ixwxc1b2r"/><path clip-rule="evenodd" class="ygh_macxy"/></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-up-medium-light",
	});
}

export default Component;
