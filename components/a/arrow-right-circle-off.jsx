import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ns1gl4fqi.css';
import '../../css/c/cw0z9sbge.css';
import '../../css/j/jvuqbdbej.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ns1gl4fqi"/><path clip-rule="evenodd" class="cw0z9sbge"/><path clip-rule="evenodd" class="jvuqbdbej"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:arrow-right-circle-off",
	});
}

export default Component;
