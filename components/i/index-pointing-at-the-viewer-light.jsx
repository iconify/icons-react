import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bovi3wsmu.css';
import '../../css/w/wo8rw04rk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bovi3wsmu"/><path class="wo8rw04rk"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-at-the-viewer-light",
	});
}

export default Component;
