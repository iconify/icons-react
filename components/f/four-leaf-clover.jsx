import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gb1ollb9h.css';
import '../../css/r/rr89zbbbj.css';
import '../../css/j/jcwdig4nw.css';
import '../../css/s/sprzifbpg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gb1ollb9h"/><path class="rr89zbbbj"/><path class="jcwdig4nw"/><path class="sprzifbpg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:four-leaf-clover",
	});
}

export default Component;
