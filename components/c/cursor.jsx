import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/g/g10zemb6e.css';
import '../../css/j/jn0k031ks.css';

const viewBox = {"width":41,"height":41,"left":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="g10zemb6e"/><path class="jn0k031ks"/></g>`,
		"fallback": "streamline-stickies-color:cursor",
	});
}

export default Component;
