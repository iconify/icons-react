import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zm6l6dbem.css';
import '../../css/a/aj7ix0boz.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/k/kgg3xb7jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zm6l6dbem"/><path class="aj7ix0boz wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="kgg3xb7jo wm-a"/></g>`,
		"fallback": "withicons-kawaii:contrast",
	});
}

export default Component;
