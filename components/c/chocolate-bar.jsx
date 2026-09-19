import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nf_8hqbtu.css';
import '../../css/a/alqt4obhh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nf_8hqbtu"/><path class="alqt4obhh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:chocolate-bar",
	});
}

export default Component;
