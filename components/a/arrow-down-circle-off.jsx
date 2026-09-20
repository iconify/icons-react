import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srtr7-jkl.css';
import '../../css/a/anl1izbvj.css';
import '../../css/b/b4xs49b6k.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="srtr7-jkl"/><path clip-rule="evenodd" class="anl1izbvj"/><path clip-rule="evenodd" class="b4xs49b6k"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:arrow-down-circle-off",
	});
}

export default Component;
