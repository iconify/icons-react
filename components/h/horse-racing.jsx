import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z7vykgw1o.css';
import '../../css/i/ibe9t6lyh.css';
import '../../css/j/jv7f0-boz.css';
import '../../css/u/uayp1jl3d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z7vykgw1o"/><path class="ibe9t6lyh"/><path class="jv7f0-boz"/><path class="uayp1jl3d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:horse-racing",
	});
}

export default Component;
