import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0aqhcbso.css';
import '../../css/o/om3ochbfm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w0aqhcbso"/><path class="om3ochbfm"/></g>`,
		"fallback": "fluent-emoji-flat:file-folder",
	});
}

export default Component;
