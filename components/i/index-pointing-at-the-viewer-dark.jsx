import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qj_gorb3u.css';
import '../../css/b/bwz-q1bgq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qj_gorb3u"/><path class="bwz-q1bgq"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-at-the-viewer-dark",
	});
}

export default Component;
