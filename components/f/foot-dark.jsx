import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9-lfb4tl.css';
import '../../css/r/rs61gez4m.css';
import '../../css/f/fnxd07bfk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w9-lfb4tl"/><path class="rs61gez4m"/><path class="fnxd07bfk"/></g>`,
		"fallback": "fluent-emoji-flat:foot-dark",
	});
}

export default Component;
