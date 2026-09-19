import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/caj_70b4k.css';
import '../../css/k/kx3woccpy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="caj_70b4k"/><path class="kx3woccpy"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-at-the-viewer-medium-light",
	});
}

export default Component;
