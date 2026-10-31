import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/elwrwpzwt.css';
import '../../css/a/ask6e3ueu.css';
import '../../css/w/wj05nbxlz.css';
import '../../css/g/g4o146b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="elwrwpzwt"/><path class="ask6e3ueu wm-shine"/><path class="wj05nbxlz wm-k"/><path class="g4o146b6z wm-a"/></g>`,
		"fallback": "withicons-kawaii:align-top",
	});
}

export default Component;
