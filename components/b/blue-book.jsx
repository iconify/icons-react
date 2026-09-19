import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heic6riuh.css';
import '../../css/e/e3idh-b6l.css';
import '../../css/r/r3dusdbez.css';
import '../../css/e/enmu-w24f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="heic6riuh"/><path class="e3idh-b6l"/><path class="r3dusdbez"/><path class="enmu-w24f"/></g>`,
		"fallback": "fluent-emoji-flat:blue-book",
	});
}

export default Component;
