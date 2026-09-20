import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8jnhibmg.css';
import '../../css/j/jac66gbbw.css';

const viewBox = {"width":193,"height":193,"left":-203,"top":444};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b8jnhibmg"/><path class="jac66gbbw"/></g>`,
		"fallback": "thesvg:chime",
	});
}

export default Component;
