import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs9vf3byp.css';
import '../../css/u/um8_dl0cx.css';
import '../../css/w/w8z8pgbyr.css';
import '../../css/q/q3rujdbek.css';
import '../../css/b/b376ql6hm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vs9vf3byp"><path class="um8_dl0cx"/><path class="w8z8pgbyr"/><path class="q3rujdbek"/><path class="b376ql6hm"/></g>`,
		"fallback": "fluent-emoji-flat:footprints",
	});
}

export default Component;
