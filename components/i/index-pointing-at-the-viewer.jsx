import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwufpdbgz.css';
import '../../css/c/cjmr6qbiw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nwufpdbgz"/><path class="cjmr6qbiw"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-at-the-viewer",
	});
}

export default Component;
