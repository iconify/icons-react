import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pz4a6t63l.css';
import '../../css/h/h4-__3b9e.css';
import '../../css/j/j2qre1brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pz4a6t63l"/><path class="h4-__3b9e"/><path class="j2qre1brj"/></g>`,
		"fallback": "iconoir:bin-plus-in",
	});
}

export default Component;
