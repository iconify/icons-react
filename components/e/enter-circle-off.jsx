import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ykbeh9bqu.css';
import '../../css/l/lz22xst6e.css';
import '../../css/j/jsbu-tb6f.css';
import '../../css/s/s0mrlwbgd.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ykbeh9bqu"/><path clip-rule="evenodd" class="lz22xst6e"/><path clip-rule="evenodd" class="jsbu-tb6f"/><path clip-rule="evenodd" class="s0mrlwbgd"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:enter-circle-off",
	});
}

export default Component;
